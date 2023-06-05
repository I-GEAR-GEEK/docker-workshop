const express = require('express')
const mysql = require('mysql2')

const server = express()

server.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))

// Connect database
setTimeout(() => {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  connection.connect(function (err) {
    if (err) {
      console.error('Database error connecting: ' + err.stack)
      return
    }
    console.log('Database Connection Established - as id ' + connection.threadId)
  })
}, 1000)

const PORT = 5000
server.listen(PORT, () => {
  console.info('Server is listening on port ' + PORT)
})