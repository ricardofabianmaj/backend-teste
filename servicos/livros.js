const fs = require("fs");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivro(id) {

    const list = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = list.filter(livro => livro.id === id)[0]

    return livroFiltrado
}
function postLivroServ(Novo){
    const list = JSON.parse(fs.readFileSync("livros.json"))
    const NovaLista = [...list, Novo]
    fs.writeFileSync("livros.json", JSON.stringify(NovaLista))
}

module.exports = { 
    getTodosLivros,
    getLivro,
    postLivroServ
};
