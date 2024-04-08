const fs = require('fs')
const path = require('path')

function replaceBR(content) {
  return content.replace(/<br>/g, '')
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
      fs.writeFileSync(filepath, fileContent, 'utf-8')
    }
  })
}

const directory = './docs'
traverseDirectory(directory)
