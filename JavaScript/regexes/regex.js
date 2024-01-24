let quoteSample = "The quick brown fox jumps over the lazy dog";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex);
console.log(result);

console.log("==========================");
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let newResult = difficultSpelling.match(myRegex);
console.log(newResult);

console.log("==========================");
