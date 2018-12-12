const route=require('express').Router()
const db=require('../db')
//Send all person's info as array
route.get('/persons/',(req,res)=>
{
    db.getAllPersons().then((persons)=>res.send(persons)).catch((err)=>res.send({error:err}))
})
//Adds new person.info is in res.body
route.post('/persons',(req,res)=>
{
    db.addNewPerson(req.body.name,req.body.age,req.body.city).then(()=>res.redirect('/api/persons/')).catch((err)=>res.send({error:err}))
})

exports=module.exports={route}