const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/subfolder/notes.txt", "utf8");
const second = readFileSync("./content/subfolder/first.txt", "utf8");

// console.log(first, second);

writeFileSync("./content/hello.txt", `Hello ${first} \n ${second}`);
