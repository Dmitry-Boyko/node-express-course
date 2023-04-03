const express = require('express')
const router = express.Router()

app.get('/', (req, res) => {
  const {name} = req.body
  if(name) {
    return res.status(200).send(`Hey ${name}`)
  }
  res.status(401).send('Please, how I can call you?')
})

module.export = router
