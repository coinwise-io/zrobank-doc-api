var fs = require('fs')
const paasUrl = 'https://paas-hml.zrobank.xyz/api-json'
const gatewayUrl = 'https://api-users-hml.zrobank.xyz/api-json'

function generateSpecs(url, filename, includeOptions = []) {
  let specJson = {}

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (const [key, value] of Object.entries(data.paths)) {
        if (includeOptions.some((i) => key.includes(i))) {
          specJson = {
            ...data,
            paths: {
              ...specJson.paths,
              [key]: value,
            },
          }
        }
      }
      fs.writeFile(
        `specs/${filename}.json`,
        JSON.stringify(specJson),
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

generateSpecs(paasUrl, 'paas-spec', ['/auth/', '/pix/'])
generateSpecs(paasUrl, 'caas-spec', [
  '/auth/',
  '/otc/',
  '/quotations',
  '/conversions',
])
generateSpecs(gatewayUrl, 'gateway-spec', ['/auth/', '/payments-gateway/'])
