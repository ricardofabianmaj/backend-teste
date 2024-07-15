const express = require("express")
const app = express()

const rotaLivro = require('./rotas/livro')
app.use(express.json)

app.use('/livro', rotaLivro) //Toda vez que tiver '/livro', ele usará rotaLivro como variável

const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Escutando porta ' + port);
})