const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const charactersName = characters.map((character) => character.name);
//2. Get array of all heights
const charactersHeight = characters.map((character) => character.height);
//3. Get array of objects with just name and height properties
const charactersNameAndHeight = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
//4. Get array of all first names
const arrayFirstName = characters.map(
  (character) => character.name.split(" ")[0]
);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, curr) => {
  return acc + curr.mass;
}, 0);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, curr) => {
  return acc + curr.height;
}, 0);
//3. Get total number of characters by eye color
const totalCharactersEyeColor = characters.reduce((acc, curr) => {
  const color = curr.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});
//4. Get total number of characters in all the character names
const totalCharactersInAllCharacterName = characters.reduce((acc, curr) => {
  return acc + curr.name.length;
}, 0);

//***FILTER***
//1. Get characters with mass greater than 100
const charactersGreaterThan100 = characters.filter(
  (characters) => characters.mass > 100
);
//2. Get characters with height less than 200
const characterHeightLessThan200 = characters.filter(
  (characters) => characters.height < 200
);
//3. Get all male characters
const maleCharacters = characters.filter(
  (characters) => characters.gender === "male"
);
//4. Get all female characters
const femaleCharacters = characters.filter(
  (characters) => characters.gender === "female"
);

//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((a, b) => b.mass - a.mass);
//2. Sort by height
const sortByHeight = characters.sort((a, b) => b.height - a.height);
//3. Sort by name
const sortByName = characters.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});
//4. Sort by gender
const sortByGender = characters.sort((a, b) => {
  if (a.gender === "male") {
    return -1;
  }
  return 1;
});

//***EVERY***
//1. Does every character have blue eyes?
const allHasBlueEyes = characters.every(
  (character) => character.eye_color === "blue"
);
//2. Does every character have mass more than 40?
const allHaveMassMoreThan40 = characters.every(
  (character) => character.mass > 40
);
//3. Is every character shorter than 200?
const allIsShorterThan200 = characters.every(
  (character) => character.height < 200
);
//4. Is every character male?
const allIsMale = characters.every((character) => character.gender === "male");

//***SOME***
//1. Is there at least one male character?
const atLeast1Male = characters.some(
  (character) => character.gender === "female"
);
//2. Is there at least one character with blue eyes?
const atLeast1BlueEyes = characters.some(
  (character) => character.eye_color === "blue"
);
//3. Is there at least one character taller than 210?
const atLeast1Taller = characters.some((character) => character.height > 210);
//4. Is there at least one character that has mass less than 50?
const atLeast1MassLess = characters.some((character) => character.mass < 50);
