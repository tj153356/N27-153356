const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

app.get('/',(req, res, next) => {              
    res.render('index.ejs', {})          
})
//Wenn die login-Seite im Browser aufgerufen wird, dann wird die login.ejs vom Server gerendert an den Browser zurückgegeben:


app.get('/login',(req, res, next) => {              
    res.render('login.ejs', {})          
})