const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('services', { title: 'Nome do meu site | Services', desc: 'Services Page'})
})

module.exports = router