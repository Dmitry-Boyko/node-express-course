require('./db/connect')

console.log('Task Manager App')
const express = require("express")
const app = express()


// middlware
app.use(express.json())

// adds the routs here
const tasks = require('./routers/tasks')
const connectDB = require('./db/connect')

require('dotenv').config()


// routs
app.get('/', (req, res) => {
  res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')          - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task


const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server is running ${port} and DB connected`))
  } catch (error) {
    console.log(error)
  }
}

// video stop on 1:44:14

start()