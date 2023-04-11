const express = require("express")
const app = express()
// const mongoose = require("mongoose")
const port = 3000


// routs
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

// mongoose.connect(
//   process.env.MONGO_URI, 
//   {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//   }
// )

// require("dotenv").config()


// const studentSchema = new mongoose.Schema({
//   roll_no: Number,
//   name: String,
//   year: Number,
//   subjects: [String]
// })

app.listen(port, () => console.log(`Server is running ${port}`))