const { getTodosLivros, getLivro, postLivroServ} = require("../../servicos/livros")

function getLivros(req, res) {
    try {
        const books = getTodosLivros()
        res.send(books)
    }catch (error) {
        console.log(error);
    }
}
function getLivroPorID(req, res) {
    try {
        const id = req.params.id
        const book = getLivro(id)
        
        res.send(book)
    }catch (error) {
        console.log(error);
    }
}

function postLivro(req, res) {
    try {
        const newBook = req.body
        postLivroServ(newBook);
        res.status(201)
        res.send('Livro Adicionado com Sucesso')
    } catch (error) {
        console.log(error);
        throw new Error('Erro ao adicionar o livro'); 
    }
}

module.exports = {
    getLivros,
    getLivroPorID,
    postLivro
}