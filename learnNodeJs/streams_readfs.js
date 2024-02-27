var http = require("http");
var fs = require("fs");

const { createReadStream } = require("fs");

const stream = createReadStream("./content/subfolder/forth.txt");

stream.on("data", (result) => {
  console.log(result);
});

http
  .createServer(function (req, res) {
    const text = fs.createReadStream("./content/subfolder/forth.txt", "utf-8");
    text.on("open", () => {
      text.pipe(res);
    });
    text.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
