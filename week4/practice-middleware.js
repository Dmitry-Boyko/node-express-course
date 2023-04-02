const consoleLog = (req, res, next) => {
  const method = req.method
  const url = req.url

  const time = new Date().toLocaleDateString('en-US')
  console.log(`using method: ${method}, using URL: ${url}, current time is: ${time}`)
  next()
}

module.exports = consoleLog