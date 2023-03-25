const express = require('express')
const practiceExpress = express()
const path = require('path')

practiceExpress.use(express.static('./new-public'))

practiceExpress.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './new-public/index.html'))
})

practiceExpress.get('./:sample', (req, res) => {
  res.sendStatus('<h1>This is working</h1>')
})

// if(practiceExpress.get('./:sample')) {
//   return res.status(200).sendStatus('<h1>This is working</h1>')
// }

practiceExpress.listen(3000, () => {
  console.log('Server is listening on port 3000');
})