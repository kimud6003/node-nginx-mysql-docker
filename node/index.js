const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const createTable = `CREATE TABLE IF NOT EXISTS people(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`

connection.query(createTable);
const sql = `INSERT INTO people (name) values ('dongjun')`

connection.query(sql)

app.get('/', (_req, res) => {
    connection.query('SELECT name FROM people', (error, people, _fields) => {
        if (error) throw error;

        peopleNames = people.map(person => `<li>${person.name}</li>`).join()

        let body = `<h1>asd</h1>`
        body += `<ul>${peopleNames}</ul>`

        res.send(body)
    });
})

const server = app.listen(port, () => {
    console.log(`Port ${port}`)
})

process.on('SIGTERM', () => {
    console.log('Close db connection')
    connection.end()
})
