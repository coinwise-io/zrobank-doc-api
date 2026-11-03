require('dotenv').config()
const fs = require('fs')

// Each service sits behind its own Cloudflare Access application, so each one
// has its own service token: <SERVICE>_CF_ACCESS_CLIENT_ID / _SECRET
// (e.g. BAAS_CF_ACCESS_CLIENT_ID).
function cloudflareAccessHeaders(service) {
  const clientId = process.env[`${service}_CF_ACCESS_CLIENT_ID`]
  const clientSecret = process.env[`${service}_CF_ACCESS_CLIENT_SECRET`]

  if (!clientId || !clientSecret) return {}

  return {
    'CF-Access-Client-Id': clientId,
    'CF-Access-Client-Secret': clientSecret,
  }
}

const services = {
  PAAS: process.env.PAAS_BASE_URL,
  GATEWAY: process.env.GATEWAY_BASE_URL,
  BAAS: process.env.BAAS_BASE_URL,
}

async function fetchSpec(service) {
  const url = services[service]
  if (!url) throw new Error(`${service}_BASE_URL is not set`)

  // Without a valid token Cloudflare redirects to its login page, so a
  // redirect is treated as an authentication failure instead of being followed.
  const res = await fetch(url, {
    headers: { Accept: 'application/json', ...cloudflareAccessHeaders(service) },
    redirect: 'manual',
  })

  if (res.status >= 300 && res.status < 400) {
    const location = new URL(res.headers.get('location'), url)
    throw new Error(
      `HTTP ${res.status} redirect to ${location.origin}${location.pathname} (check the Cloudflare Access credentials)`
    )
  }
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`)

  const contentType = res.headers.get('content-type') || ''
  if (!contentType.includes('json')) {
    throw new Error(`expected JSON, got "${contentType}"`)
  }

  return res.json()
}

function generateSpecs(service, filename, excludeOptions = []) {
  let specJson = {}

  fetchSpec(service)
    .then((data) => {
      for (const key in data.paths) {
        for (const method in data.paths[key]) {
          if (excludeOptions.every((i) => !key.includes(i))) {
            if (!specJson[key]) {
              specJson[key] = {}
            }
            specJson[key][method] = data.paths[key][method]
          }
        }
      }
      fs.writeFile(
        `specs/${filename}.json`,
        JSON.stringify({
          ...data,
          paths: specJson,
        }),
        (err) => {
          if (err) throw err
          console.log(`The ${filename}.json has been saved!`)
        }
      )
    })
    .catch((err) => {
      console.error(
        `Error generating ${filename} from ${service}, keeping the committed spec:`,
        err.message
      )
    })
}

generateSpecs('PAAS', 'paas-spec', [
  '/cielo/',
  '/nupay/',
  '/cotations/',
  '/picpay/',
])
generateSpecs('PAAS', 'caas-spec', ['/cielo/', '/nupay/', '/picpay/', '/pix/'])
generateSpecs('GATEWAY', 'gateway-spec', [])
generateSpecs('BAAS', 'baas-spec', [])
