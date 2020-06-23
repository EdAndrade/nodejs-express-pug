const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('about', { title: 'Nome do meu site | About', desc: 'About Page'})
})

module.exports = router