const { Router } = require("express")
const router = Router()

const { getLivros, getLivroPorID, postLivro } = require('./controladores/livros')

router.get('/', getLivros )
router.get('/:id', getLivroPorID )

router.post('/', postLivro)

router.put('/', (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo: PUT')
    } catch (error) {
        console.log(error)
    }
})

router.patch('/', (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo: PATCH')
    } catch (error) {
        console.log(error)
    }
})

router.delete('/', (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo: DELETE')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router