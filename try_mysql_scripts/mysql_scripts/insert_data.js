const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
}); 

const person={
    name:process.argv[2],
    age:parseInt(process.argv[3]),
    city:process.argv[4]
}
connection.query(`INSERT INTO persons (name,age,city) VALUES ('${person.name}',${person.age},'${person.city}')`,
                        (err,results)=>
                        {
                            if(err)
                                console.log(err)
                            else
                            {
                                console.log(results)
                                console.log("inserted succesfully")
                            }
                            connection.close()
                        }
                );