const { isUtf8 } = require("buffer")
const { readFile, writeFile } = require("fs")
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText("./content/first-file.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

const start = async() => {
  try {
    const first = await readFilePromise("./content/first-file.txt", 'utf8')
    const second = await readFilePromise("./content/second-file.txt", 'utf-8')
    await writeFilePromise('./content/result.txt', `this is awesome! :  ${first}, ${second}`)
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

// https://www.youtube.com/watch?v=Oe421EPjeBE&t=6357s
// 3.08


// variant 2
const { readFile, writeFile } = require("fs").promises


const start2 = async() => {
  try {
    const first = await readFile("./content/first-file.txt", 'utf8')
    const second = await readFile("./content/second-file.txt", 'utf-8')
    await writeFile('./content/result.txt', `this is awesome! :  ${first}, ${second}`, {flag: 'a'})
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start2()
