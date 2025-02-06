const fs = require('fs')
const path = require('path')
require('dotenv').config()

function replaceBR(content) {
  return content.replace(/<br>/g, '')
}

function replacePixParticipantsURL(content) {
  const baseUrl = process.env.GATEWAY_BASE_API_URL || ''
  const path = '/api/pix-participants'

  return content.replace(`(${path})`, `(${baseUrl}${path})`)
}

function traverseDirectory(directory) {
  const files = fs.readdirSync(directory)

  files.forEach((file) => {
    const filepath = path.join(directory, file)
    const stats = fs.statSync(filepath)

    if (stats.isDirectory()) {
      traverseDirectory(filepath)
    } else if (stats.isFile() && path.extname(filepath) === '.mdx') {
      let fileContent = fs.readFileSync(filepath, 'utf-8')
      fileContent = replaceBR(fileContent)
      fileContent = replacePixParticipantsURL(fileContent)
      fs.writeFileSync(filepath, fileContent, 'utf-8')
    }
  })
}

const directory = './docs'
traverseDirectory(directory)
