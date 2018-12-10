//Getting clients
const express = require('express')
const mysql = require('mysql2')
const db = require('./db')//Got getAllPersons & addNewPerson functions in =>(db object)
const app = express()
const path=require('path');

//B O D Y -- P A R S E R S
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//Easily render pages with modified data
app.set('view engine', 'hbs')

//R-E-Q-U-E-S-T-S 
app.use('/',express.static(path.join(__dirname,'public')))

app.get('/pages',require('./routes/pages').route)

app.get('/api',require('./routes/api').route)

//4 0 4 - H A N D L E R
app.listen(4444, () => {
    console.log("Server started at http://localhost:4444")
})