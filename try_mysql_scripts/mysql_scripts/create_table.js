//Get the client
const mysql = require('mysql2')
//Synchronous Task
let config={
  host: 'localhost',
  database: 'mytestdb',
  user: 'myuser',
  password: 'mypass',

}
//creating connection to the database with our specific config

const connection = mysql.createConnection(config);

//Async Function

connection.query(
  
  //Backticks for multi-lining strings
  `
    CREATE TABLE IF NOT EXISTS persons(
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30)
    )
    `,
  //Call-back Function.Runs after query has ended.
  //results have the data we queried for(if any)
  (err, results) => {
    if (err)
      console.error(err);
    else
      console.log("Table Created SUccesfully");
    connection.close();

  }
);
