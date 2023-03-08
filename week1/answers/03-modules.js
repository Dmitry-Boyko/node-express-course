// const amount = 12

// if (amount < 10) {
//   console.log('small number');
// } else {
//   console.log('large number');
// }

// console.log(`hey it's my first node app!!!`);

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share menimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternativ-flavor')

require(`./07-mind-generate`)

sayHi('susan')
sayHi(names.peter)
sayHi(names.john)