1. Look if you have installen NodeJs on your machine:
    Open PowrShell (Better as Administrator) and type command: node -v

2. Install Node on own machine
    URL: https://nodejs.org/en/download/
    use LTS version
    
3. REPL
    Open Terminal and type: node
    Hit Enter and expect to see new line with ">_" sigin.

    example type: 
    > const name = "Dmitry" // hit enter now
    unddefined
    > name // hit enter
    'Dmitry'

4. Exit fExample:rom REPL: hit Ctrl+C
    (To exit, press Ctrl+C again or Ctrl+D or type .exit)


//////
//https://www.youtube.com/watch?v=Oe421EPjeBE 1.02.07

Code example:
const amount = 12

if (amount < 10) {
  console.log('small number');
} else {
  console.log('large number');
}

console.log(`hey it's my first node app!!!`);


/////////////
//  GLOBALS      - NO WINDOW!!!

//  __dirname   - path to current directory
//  __filename  - file nAME
//  REQUIRE     - FUNCTION TO USE MODULES (Common JS)
// module       - info about current module (file)
//  process     - info about env where the program is being executed

example:
1. 
console.log(__dirname)
setInterval(() => {
    console.log('hello world')
}, 1000)

2.
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share menimum)

const secret = 'SUPER SECRET'
const john = "john"
const peter = "peter"

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)

