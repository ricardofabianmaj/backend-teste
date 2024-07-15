const fs = require('fs')

const dados = JSON.parse(fs.readFileSync('livros.json'))
novoDado = { "id": "3", "name": "try3"}

fs.writeFileSync("livros.json", JSON.stringify([...dados, novoDado]))

console.log(JSON.parse(fs.readFileSync("livros.json")));