import * as z from "http";

const server = z.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
    // res.end("Home Page");
  } else if (req.url === "/about") {
    res.write("About Page");
    // res.end("About Page");
  } else {
    res.end(`<a href="/">Back home</a>`);
  }
});

server.listen(5000);
