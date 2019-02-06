///////////////////////////~~~~~~~~~~~~~~~D A T A B A S E~~~~~~~~~~~~~~~///////////////////////////

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
    CREATE TABLE IF NOT EXISTS test(
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
    //connection.close();

  }
);

//Getting all person's DATA from database 
function getAllPersons() {
    return new Promise(
        (resolve, reject) => {
            connection.query('SELECT * FROM test',
                (err, rows, cols) => {
                    if (err)
                        reject(err)
                    else
                        resolve(rows)
                })
        }
    )
}
//Getting info of person having specified ID

function getPersonById(id) {
    return new Promise(
        (resolve, reject) => {
            connection.query(`SELECT * FROM test WHERE id IS ?`,
            [id],
                (err, rows, cols) => {
                    if (err)
                        reject(err)
                    else
                        {console.log(rows);resolve(rows)}
                })
        }
    )
}

//Adding new person's data to database
function addNewPerson(name, age, city) {
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO test (name,age,city) VALUES (?,?,?)`,
            [name, age, city],
            (err, results) => {
                if (err)
                    reject(err)
                else
                    resolve()
            }
        )
    })
}
//Exporting functions
exports = module.exports = {
    getAllPersons,
    addNewPerson
}