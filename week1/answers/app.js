const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my page");
  }
  if (req.url === "/") {
    res.end("Welcome to my home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `);
  }
});

server.listen(3000);

// https://www.youtube.com/watch?v=Oe421EPjeBE
// 1:27:29 >> ask code explanation
// stoped on 1:37:12
