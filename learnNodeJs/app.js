const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      // console.log(`${j}`);
    }
  }
  res.end("Hello World");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
