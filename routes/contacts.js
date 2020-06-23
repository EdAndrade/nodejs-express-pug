const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('contacts', { title: 'Nome do meu site | Contacts', desc: 'Contact Page'})
})

module.exports = router