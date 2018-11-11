const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
}); 
connection.query(`SELECT * FROM persons`,
                        (err,rows,cols)=>
                        {
                            if(err)
                                console.log(err)
                            else
                            {
                                console.log(rows)
                                console.log(cols)
                            }
                            connection.close()
                        }
                );