const { readFile, writeFile, write } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    throw new Error("Error", err);
  }
  // console.log(result);
});

writeFile(
  "./content/subfolder/second.txt",
  "This is the second text file",
  (err, result) => {
    if (err) {
      throw new Error("Error", err);
    }
    // console.log(result);
  }
);

const start = async () => {
  try {
    const first = await readFilePromise(
      "./content/subfolder/second.txt",
      "utf-8"
    );
    await writeFilePromise(
      "./content/subfolder/third.txt",
      "This is the third file"
    );
    // console.log(first);
  } catch (err) {
    console.log(err);
  }
};

start();

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        // resolve(result);
      }
    });
  });
};

getText("./content/subfolder/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
