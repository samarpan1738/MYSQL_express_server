const route=require('express').Router()
const db=require('../db')

//Send all person's info as array
route.get('/persons/',(req,res)=>
{
    db.getAllPersons().then((persons)=>res.send(persons)).catch((err)=>res.send({error:err}))
})

//GET Particular Person's data 
route.get('/person/:id',(req,res)=>
{
    db.getPersonById(req.params.id).then((person)=>res.send(person)).catch((err)=>res.send({error:err}))
})

//Search on basis of specified string
route.get('/searchByCollegeName/:key',(req,res)=>
{
    db.searchByCollegeName(req.params.key).then((person)=>res.send(person)).catch((error)=>res.send({error}))
})


//DELETE person by ID
route.get('/delete/:id',(req,res)=>
{
    db.deletePersonById(req.params.id).then(()=>res.redirect('/api/persons/')).catch((err)=>res.send({error:err}))
})

//Adds new person.info is in res.body
route.post('/persons',(req,res)=>
{
    db.addNewPerson(req.body.name,req.body.age,req.body.city,req.body.college).then(()=>res.redirect('/api/persons/')).catch((err)=>res.send({error:err}))
})

exports=module.exports={route}