const express = require('express')
const app = express()
const {people} = require('./data')
// https://www.youtube.com/watch?v=Oe421EPjeBE  6:46:23

// static assets
app.use(express.static('./methods-public'))
// 7:05:25
// parse form data
app.use(express.urlencoded({ extended: false}))
// parse json data
app.use(express.json())

app.get('/api/people', (req, res) => {
res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const {name} = req.body
  if(!name) {
    return res.status(400).json({success: false, msg: 'please provide your name'})
  }
  //es.status(201).send('success')
  res.status(201).send({success: true, person:name})
})
// 7:25:24 -- 6:30 doesn't work
app.post('api/postman/people', (req, res) => {
  const {name} = req.body
  if(!name) {
    return res.status(400).json({success: false, msg: 'please provide your name'})
  }
  res.status(201).send({success: true, data: [...people, name]})
})

app.put('api/people/:id', (req, res) => {
  const {id} = req.params
  const {name} = req.body
  console.log(id, name)
  res.send('Hello new world!')
})

app.get('./login', (req, res) => {
  const {name} = req.body
  if(name) {
    return res.status(200).send(`Hey ${name}`)
  }
  res.status(401).send('Please, how I can call you?')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
}) 


