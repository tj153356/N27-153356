const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})
//Wenn die login-Seite im Browser aufgerufen wird, dann wird die login.ejs vom Server gerendert an den Browser zurückgegeben:


meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('login.ejs', {})          
})

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})
// die meineApp .post login wird ausgeführt, sobald der button auf dem Login Formular gedrückt wird

