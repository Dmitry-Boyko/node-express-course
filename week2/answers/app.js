
// // // 3:22:52
// // // copy data from the file 14-request-event.js

// // const http = require('http')

// // // const server = http.createServer((req, res) => {
// // //   res.end('Welcome')
// // // })

// // // Using Event Emitter API
// // const server = http.createServer()
// // // emits request event
// // // subcribe to it / listen for it / respond to it
// // server.on('request', (req, res) => {
// //   res.end('Welcome')
// // })

// // server.listen(5000)

// //-//-//-//

// // 3:25:32
// // Streams >> writeable, Readable, Duplex, Transform

// // create a BIG file:
// // const { writeFileSync } = require('fs')
// // for(let i=0; i<10000; i++) {
// //   writeFileSync('./content/big.txt', `hello world! ${i}\n`, {flag: 'a'})
// // }

// const { createReadStream } = require('fs')

// const stream = createReadStream('./content/big.txt', {highWaterMark: 9000, encoding: 'utf8'})

// // default chunk size = 64kb
// // last buffer - reminder
// // highWaterMark - control size
// // const stream = createReadStream('./content/big.txt', {highWaterMark: 9000})
// // const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

// stream.on('data', (result) => {
//   console.log(result)
// })

// stream.on('error', (err) => console.log(err))
var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/bigest.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  }).listen(5000)