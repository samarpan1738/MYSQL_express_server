///////////////////////////~~~~~~~~~~~~~~~D A T A B A S E~~~~~~~~~~~~~~~///////////////////////////

const mysql = require('mysql2')

//Synchronous Task
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass',

});
//Getting all person's DATA from database 
function getAllPersons() {
    return new Promise(
        (resolve, reject) => {
            connection.query('SELECT * FROM persons',
                (err, rows, cols) => {
                    if (err)
                        reject(err)
                    else
                        resolve(rows)
                })
        }
    )
}
//Adding new person's data to database
function addNewPerson(name, age, city) {
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO persons (name,age,city) VALUES (?,?,?)`,
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