// compare variable

const a = 1;
const b = 1;
const c = "1";

// we see that triple equal or '===' meaning to
// check if value is exactly same.
console.log(a === b, a === c); // Output: true false

// another example by object

// Comparing objects by content
// Creating two similar objects
let person1 = {
  name: "John",
  age: 25,
};

let person2 = {
  name: "John",
  age: 25,
};

// Using == (loose equality)
console.log(person1 == person2); // Output: false

// Using === (strict equality)
console.log(person1 === person2); // Output: false

function areObjectsEqual(obj1, obj2) {
  return obj1.name === obj2.name && obj1.age === obj2.age;
}

console.log(areObjectsEqual(person1, person2)); // Output: true

// most important to learn in memory!
// https://chat.openai.com/c/34808638-0da5-4eb4-bd1d-4814ed13e5c2
console.log("---------- Most Important ----------");
let obj1 = { name: "John" };
let obj2 = { name: "John" };

let obj3 = obj1; // obj3 now references the same object as obj1

console.log(obj1 == obj2); // false (loose equality)
console.log(obj1 === obj2); // false (strict equality)

console.log(obj1 === obj3); // true (obj1 and obj3 reference the same object)
