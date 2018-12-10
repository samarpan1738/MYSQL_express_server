const app=require('express').Router();
const db = require('./db')

app.get('/', (req, res) => {
    db.getAllPersons().then((persons) => {res.render('persons', {persons})})
        .catch((err) => res.send(err))
})

app.get('/add', (req, res) => {
    res.render('persons_add')
})

app.post('/add', (req, res) => {
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then((results) => {
            res.redirect('/users')//Redirecting to the "persons.hbs" page
        })
        .catch((err) => {
            res.send(err)
        })

})
exports=module.exports={app}