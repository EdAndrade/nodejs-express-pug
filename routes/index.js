const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { title: 'Nome do meu site', desc: 'Index Page'})
})

module.exports = router