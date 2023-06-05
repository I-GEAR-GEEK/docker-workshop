const express = require('express')

const server = express()

server.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))

const PORT = 5000
server.listen(PORT, () => {
  console.info('Database URL: ' + process.env.DATABASE_URL)
  console.info('Database User: ' + process.env.DATABASE_USERNAME)
  console.info('Server is listening on port ' + PORT)
})