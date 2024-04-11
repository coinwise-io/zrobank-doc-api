require('dotenv').config()
const fs = require('fs')
const paasUrl = process.env.PAAS_BASE_URL
const gatewayUrl = process.env.GATEWAY_BASE_URL

function generateSpecs(url, filename, includeOptions = []) {
  let specJson = {}

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (const key in data.paths) {
        for (const method in data.paths[key]) {
          if (includeOptions.some((i) => key.includes(i))) {
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
      console.error(err)
    })
}

generateSpecs(paasUrl, 'paas-spec', ['/auth/', '/pix/', '/operations/'])
generateSpecs(paasUrl, 'caas-spec', [
  '/auth/',
  '/otc/',
  '/quotations',
  '/conversions',
  '/operations/',
])
generateSpecs(gatewayUrl, 'gateway-spec', ['/api/'])
