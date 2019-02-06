//Getting clients
const express = require('express')
const app = express()
const path=require('path');

//B O D Y -- P A R S E R S
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//Easily render pages with modified data
app.set('view engine', 'hbs')

//Loads static HTML file from public folder
app.use('/',express.static(path.join(__dirname,'public')))

//Send to pages.js Router
app.use('/pages',require('./routes/pages').route)
//Send to api.js Router
app.use('/api',require('./routes/api').route)

//4 0 4 - H A N D L E R
app.listen(1738, () => {
    console.log("Server started at http://localhost:1738")
})