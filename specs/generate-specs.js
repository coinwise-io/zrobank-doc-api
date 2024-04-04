var fs = require('fs')
const paasUrl = 'https://paas-hml.zrobank.xyz/api-json'
const gatewayUrl = 'https://api-users-hml.zrobank.xyz/api-json'

function generateSpecs(url, filename, excludeOptions = []) {
  let specJson = {}

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (const [key, value] of Object.entries(data.paths)) {
        if (excludeOptions.every((i) => !key.includes(i))) {
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
          console.log('The file has been saved!')
        }
      )
    })
    .catch((err) => {
      console.error(err)
    })
}

generateSpecs(paasUrl, 'paas-spec', ['/otc'])
generateSpecs(paasUrl, 'caas-spec', ['/pix'])
generateSpecs(gatewayUrl, 'gateway-spec', ['/pix', '/otc'])
