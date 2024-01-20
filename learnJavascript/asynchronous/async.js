import fs from "fs";

const myPromise = new Promise((resolve, reject) => {
  const randomNums = Math.floor(Math.random() * 10);
  if (randomNums === 0) {
    console.log(randomNums);
    resolve();
  } else {
    console.log(randomNums);
    reject();
  }
});

myPromise
  .then(() => console.log("Success"))
  .catch(() => console.log("Somethings is not right"));

fs.promises
  .readFile("./text.txt", { encoding: "utf-8" })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

plusNums(6);
function plusNums(n) {
  // callback using setTimeout
  setTimeout(() => {
    console.log(n, "+ 1 =", n + 1);
  }, 5000);
}

fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

// const fetchPokemon = async () => {
//   try {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// };

// fetchPokemon();
