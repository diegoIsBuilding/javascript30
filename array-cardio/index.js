const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const oldInventors = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1600
);
console.log("Exercise 1");
console.table(oldInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorFullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log("Exercise 2");
console.table(inventorFullNames);

// Keep in mind the bubbling factor
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsBirthdate = inventors.sort((inventorA, inventorB) => {
  if (inventorA.year < inventorB.year) {
    return 1;
  } else {
    return -1;
  }
});
console.log("Exercise 3");
console.table(inventorsBirthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

// EXAMPLE:
// MDN Web Docs
// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x
// }, initialValue)

// console.log(sum) // logs 6

// First try returned undefined
// Second try returned > [object Object]8984818078767067595037
// third try returned
//861
const cumulativeInvestorAges = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log("Exercise 4");
console.log(cumulativeInvestorAges);

// 5. Sort the inventors by years lived
// Accidently did this for exercise 3
// Going to redo exercise 3
const inventorsAgeOrder = inventors.sort((inventorA, inventorB) => {
  const ageOfA = inventorA.passed - inventorA.year;
  const ageOfB = inventorB.passed - inventorB.year;
  if (ageOfA < ageOfB) {
    return 1;
  } else {
    return -1;
  }
});
console.log("Exercise 5");
console.table(inventorsAgeOrder);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// The rest of this exercise will be done in Chrome Dev Tools
// Use the .map/.filter/.includes

//REMEMBER A NODE LIST DOES NOT EQUAL ARRAY
// Grab the category list
// const wikiCategory = document.querySelector(".mw-category");
// // Grab each link which are anchor tags from wikiCategory
// const categoryLinks = Array.from(wikiCategory.querySelectorAll("a"));
// // now that we have the list of Boulevards, now create a new list with Boulevards
// // containing the characters 'de'
// const boulevardsWithDE = categoryLinks
// .map((link) => link.textContent)
// .filter((boulevardName) => boulevardName.includes("de"));






//
//question 7 and 8 were challenging 
// 7. sort Exercise
// Sort the people alphabetically by last name
// Using MDN Web Docs Sorting Example
// THIS IS FOR THE PEOPLE LIST
const alphabeticalLastNames = people.sort((name, nextName) => {
  console.log("Exercise 7");
  // attempt without destructuring
  const splitName = name.split(", ");
  const firstLastName = splitName[0];
  // console.log(firstLastName);
  const nextSplitName = nextName.split(", ");
  const nextLastName = nextSplitName[0];

  if (firstLastName < nextLastName) {
    return -1;
  } else {
    return 1;
  }
});
console.table(alphabeticalLastNames);

// 8. Reduce Exercise
// Sum up the instances of each of these
// expected example output would be something like
// {
//     car: 5,
//     truck: 3
// }
console.log("Exercise 8");
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];
const vehicles = data.reduce((object, item) => {
  console.log(object);
  if (!object[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
  // I dont really understand this part. Why do we need an empty object there? 
}, {});
