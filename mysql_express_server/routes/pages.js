const route=require('express').Router();
const dbs = require('../db')

route.get('/', (req, res) => {
    dbs.getAllPersons().then((persons) => {res.render('persons', {persons})})
        .catch((err) => res.send(err))
})

route.get('/add', (req, res) => {
    res.render('persons_add')
})

route.post('/add', (req, res) => {
    dbs.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then((results) => {
            res.redirect('/users')//Redirecting to the "persons.hbs" page
        })
        .catch((err) => {
            res.send(err)
        })

})

exports=module.exports={route}