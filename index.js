const express = require('express')
const app = express()
const path = require('path')

//config das rotas
const indexRoute = require('./routes/index.js')
const aboutRoute = require('./routes/about.js')
const contactsRoute = require('./routes/contacts.js')
const servicesRoute = require('./routes/services.js')

//setando as rotas base
app.use('/', indexRoute)
app.use('/about', aboutRoute)
app.use('/contacts', contactsRoute)
app.use('/services', servicesRoute)

//setando o directorio das views
app.set('views', path.join(__dirname, './views'))
//setando o pug como template engine
app.set('view engine', 'pug')
//setando o directirio dos arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

const port = 3000

app.listen(port, () =>{
    console.log(`Servidor rodando, acesse http://localhost:3000`)
})