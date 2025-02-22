const express = require('express')
const path = require('path')
const practiceExpress = express()

practiceExpress.use(express.static('./new-public'))

practiceExpress.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './new-public/index.html'))
})

// // sample page: localhost:3000/sample
practiceExpress.get('/sample', (req, res) => {
  res.status(200).send('This is working')
})

practiceExpress.listen(3000, () => {
  console.log('Server is listening on port 3000');
})