const express = require('express')
const app = express()
const consoleLog = require('./practice-middleware')
const port = 3000

app.get(`/`, consoleLog, (req, res) => {
  res.send(`Week 4, ${consoleLog}`)
})


app.listen(port, () => {
  console.log('Server is listening on port 3000...')
})