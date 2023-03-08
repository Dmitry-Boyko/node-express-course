// const amount = 12

// if (amount < 10) {
//   console.log('small number');
// } else {
//   console.log('large number');
// }

// console.log(`hey it's my first node app!!!`);

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share menimum)

// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternativ-flavor')

// require(`./7-mind-generate`)

// sayHi('susan')
// sayHi(names.peter)
// sayHi(names.john)

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// method returnws the systems uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`) 

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS);