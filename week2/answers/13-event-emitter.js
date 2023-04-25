// Event driven
// https://www.youtube.com/watch?v=Oe421EPjeBE&t=6357s
// 3.15:10

// comment: 'on' -> listen for an event, 'emit' - emit an event

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})


customEmitter.emit('response', 'john', 34)



