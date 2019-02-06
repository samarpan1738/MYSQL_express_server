const route=require('express').Router()
const db=require('../db')
console.log(db)
//Send all person's info as array
console.log("in API");
route.get('/persons/',(req,res)=>
{
    db.getAllPersons().then((persons)=>res.send(persons)).catch((err)=>res.send({error:err}))
})
console.log("crossed getallpersons");

//Particular Person 
route.get('/person/:id',(req,res)=>
{
    console.log(" in getPersonById")
    db.getPersonById(2).then((person)=>res.send(person)).catch((err)=>res.send({error:err}))
})
console.log("crossed getpersonsBy ID");
//Adds new person.info is in res.body
route.post('/persons',(req,res)=>
{
    db.addNewPerson(req.body.name,req.body.age,req.body.city).then(()=>{console.log("then");res.redirect('/api/persons/')}).catch((err)=>{console.log("catch");res.send({error:err})})
})

exports=module.exports={route}