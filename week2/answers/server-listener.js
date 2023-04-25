// console.log('out first!');
// setTimeout(() => {
//   console.log('out second?')
// }, 0)
// console.log('out third?')

const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () =>{
  console.log('Server listening on port 5000...');
})
