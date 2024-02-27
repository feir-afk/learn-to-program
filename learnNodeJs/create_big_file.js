const { writeFileSync } = require("fs");

for (let i = 0; i <= 1000; i++) {
  writeFileSync("./content/subfolder/forth.txt", `Hello ${i}\n`, { flag: "a" });
}
