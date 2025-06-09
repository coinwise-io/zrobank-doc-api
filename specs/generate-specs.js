require('dotenv').config()
const fs = require('fs')
const paasUrl = process.env.PAAS_BASE_URL
const gatewayUrl = process.env.GATEWAY_BASE_URL
const baasUrl = process.env.BAAS_BASE_URL
const paymentGatewayUrl = process.env.PAYMENT_GATEWAY_BASE_URL

function generateSpecs(url, filename, excludeOptions = []) {
  let specJson = {}

  fetch(url)
    .then((res) => res.json())
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
      console.error(err)
    })
}

generateSpecs(paasUrl, 'paas-spec', [
  '/cielo/',
  '/nupay/',
  '/cotations/',
  '/picpay/',
])
generateSpecs(paasUrl, 'caas-spec', ['/cielo/', '/nupay/', '/picpay/', '/pix/'])
generateSpecs(gatewayUrl, 'gateway-spec', [])
generateSpecs(baasUrl, 'baas-spec', [])
generateSpecs(paymentGatewayUrl, 'paymentGateway-spec', [])
