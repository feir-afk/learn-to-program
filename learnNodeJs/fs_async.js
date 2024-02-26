import { readFile, writeFile } from "fs";

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    throw new Error("Error", err);
  }
  // console.log(result);
});

writeFile(
  "./content/subfolder/notes.txt",
  "Hello from fs_async.js file!",
  (err, result) => {
    if (err) {
      throw new Error("Error", err);
    }
    // console.log(result);
  }
);
