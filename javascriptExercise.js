//Basic JavaScript Cards

// var count = 0;

// function cc(card) {
//   // Only change code below this line
//   if(card >= 2 && card <= 6) {
//     count++

//   } else if(card >= 7 && card <= 9) {

//   } else {
//     count--
//   }

//   if (count > 0) {
//     return count + " Bet"
//   } else {
//     return count + " Hold"
//   }
//   // Only change code above this line
// }

// // Add/remove calls to test your function.
// // Note: Only the last will display
// cc(2); cc(3); cc(7); cc('K'); cc('A');

// Basic JavaScript Objects

// Example
// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// Only change code below this line.

// var myDog = {
//   "name": "Cat",
//   "legs": 10,
//   "tails": 20,
//   "friends": ["Doggomon", "Cow"],
// };

// // Basic JavaScript: Accessing Object Properties with Dot Notation

// // Setup
// var testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };

// // Only change code below this line

// var hatValue = testObj;      // Change this line
// var shirtValue = testObj;    // Change this line

// Intermediate Algorithm Scripting: Sum All Numbers in a Range

// function sumAll(arr) {
//   let low , high;
//   let result=0;
//   if(arr[0] > arr[1]) {
//     high = arr[0];
//     low = arr[1];
//   } else {
//     high = arr[1];
//     low = arr[0];
//   }

//   for(var i = low; i <= high; i++) {
//     result+= i
//     console.log(result);
//     console.log(i);
//   }

//   return result;

// }

// sumAll([1, 4]);

// Intermediate Algorithm Scripting: Diff Two Arrays

// function diffArray(arr1, arr2) {
//   var newArr = [];
//   // Same, same; but different.
//   var union = arr1.concat(arr2)
//   var intersection = arr1.filter( el => arr2.includes(el))

//   newArr = union.filter( el => !intersection.includes(el))

//   return newArr;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Setup
// var testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };

// // Only change code below this line

// var hatValue = testObj.hat;      // Change this line
// var shirtValue = testObj.shirt;    // Change this line

///////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION //
///////////////////////////////////////////////////////////////////////////

// Setup
// var testObj = {
//   "an entree": "hamburger",
//   "my side": "veggies",
//   "the drink": "water"
// };

// // Only change code below this line

// var entreeValue = testObj["an entree"];   // Change this line
// var drinkValue = testObj["the drink"];    // Change this line

///////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 PALINDROME //
///////////////////////////////////////////////////////////////////////////

// if a number appends more than 1 time in an array
// const arr1 = [1,2,3,4,5,6]
// const arr2 = [1,2,3,4,5,1,3,4,5,67,5,1,3,5]

// function check (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if(arr[i] === arr[j]) {
//         return true
//       }

//     }
//   }

// }

// const check = arr => {
//   const obj = {}
//   for (number of arr) {
//     if (obj[number]) {
//       obj[number] +=1
//     }
//      else {
//        obj[number] = 1
//      }
//   }
//   console.log(obj)
// }

// console.log(check(arr1))
// console.log(check(arr2))

// const pal = string => {
//   let counter = 0
//   const originalString = string.toLowerCase().split(" ").join('')
//   while (counter <= originalString.length/2) {
//     counter+=1
//     if (originalString[counter] !== originalString[originalString.length - 1 - counter]){
//       return false
//     }
//   }

//   return true
// }

// console.log(pal("string"))
// console.log(pal("Able was I ere I saw Elba "))

///////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 ACCESSING OBJECT PROPERTIES WITH VARIABLES //
///////////////////////////////////////////////////////////////////////////

// // Setup
// var testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// // Only change code below this line;

// var playerNumber = 16;       // Change this Line
// var player = testObj[playerNumber];   // Change this Line

///////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 UPDATING OBJECT PROPERTIES //
///////////////////////////////////////////////////////////////////////////

// Example
// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// ourDog.name = "Happy Camper";

// // Setup
// var myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// // Only change code below this line.

// myDog.name = "Happy Coder"

///////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Add New Properties to a JavaScript Object //
///////////////////////////////////////////////////////////////////////////

// Example
// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// ourDog.bark = "bow-wow";

// // Setup
// var myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// // Only change code below this line.

// myDog.bark = "woof"

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Delete Properties from a JavaScript Object //
/////////////////////////////////////////////////////////////////////////////////////

// Example
// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
//   "bark": "bow-wow"
// };

// delete ourDog.bark;

// // Setup
// var myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"],
//   "bark": "woof"
// };

// // Only change code below this line.

// delete myDog.tails

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Using Objects for Lookups                 //
/////////////////////////////////////////////////////////////////////////////////////

// Setup
// function phoneticLookup(val) {
//   var result = "";

//   // Only change code below this line
//   var lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank"
//   };

//   result = lookup[val];

//   // Only change code above this line
//   return result;
// }

// // Change this value to test
// phoneticLookup("charlie");

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Testing Objects for Properties //
/////////////////////////////////////////////////////////////////////////////////////

// Setup
// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// };

// function checkObj(checkProp) {
//   if(myObj.hasOwnProperty(checkProp)) {
//     return myObj[checkProp]
//   } else
//   return "Not Found";
// }
// // Test your code by modifying these values
// checkObj("gift");

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Manipulating Complex Objects //
/////////////////////////////////////////////////////////////////////////////////////

// var myMusic = [
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   },
//   {
//     "artist": "",
//     "title": "",
//     "release_year": 0,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ]
//   }
// ];

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Accessing Nested Objects //
/////////////////////////////////////////////////////////////////////////////////////

// Setup
// var myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Accessing Nested Arrays //
/////////////////////////////////////////////////////////////////////////////////////

// Setup
// var myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// // Only change code below this line

// var secondTree = myPlants[1].list[1]; // Change this line

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Record Collections //
/////////////////////////////////////////////////////////////////////////////////////

// Setup
// var collection = {
//   "2548": {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"]
//   },
//   "2468": {
//     album: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"]
//   },
//   "1245": {
//     artist: "Robert Palmer",
//     tracks: []
//   },
//   "5439": {
//     album: "ABBA Gold"
//   }
// };
// // Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// // Only change code below this line

// function updateRecords(id, prop, value) {
//   if (prop === "tracks" && value !== "") {
//     if (collection[id][prop]) {
//       collection[id][prop].push(value);
//     } else {
//       collection[id][prop] = [value];
//     }
//   } else if (value !== "") {
//     collection[id][prop] = value;
//   } else {
//     delete collection[id][prop];
//   }

//   return collection;
// }

// // Alter values below to test your code
// updateRecords(5439, "artist", "ABBA");

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Iterate with JavaScript While Loops //
/////////////////////////////////////////////////////////////////////////////////////

// Setup
// var myArray = [];

// // Only change code below this line.

// var i = 0;
// while (i < 5) {
//   myArray.push(i);
//   i++;
// }

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Iterate with JavaScript For Loops //
/////////////////////////////////////////////////////////////////////////////////////

// Example
// var ourArray = [];

// for (var i = 0; i < 5; i++) {
//   ourArray.push(i);
// }

// // Setup
// var myArray = [];

// // Only change code below this line.

// for (let i = 1; i < 6; i++) {
//     myArray.push(i)
// }

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Iterate Odd Numbers With a For Loop //
/////////////////////////////////////////////////////////////////////////////////////

// Example
// var ourArray = [];

// for (var i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }

// // Setup
// var myArray = [];

// // Only change code below this line.

// for (let i = 1; i < 10; i += 2) {
//   myArray.push(i);
// }

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Count Backwards With a For Loop //
/////////////////////////////////////////////////////////////////////////////////////

// Example
// var ourArray = [];

// for (var i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }

// // Setup
// var myArray = [];

// // Only change code below this line.

// for (let i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Iterate Through an Array with a For Loop //
/////////////////////////////////////////////////////////////////////////////////////

// Example
// var ourArr = [ 9, 10, 11, 12];
// var ourTotal = 0;

// for (var i = 0; i < ourArr.length; i++) {
//   ourTotal += ourArr[i];
// }

// // Setup
// var myArr = [ 2, 3, 4, 5, 6];

// // Only change code below this line

// var total = 0;

// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i]
// }

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Nesting For Loops //
/////////////////////////////////////////////////////////////////////////////////////

// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product = product * arr[i][j];
//     }
//   }

//   // Only change code above this line
//   return product;
// }

// // Modify values below to test your code
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 24TH 2019 Basic JavaScript: Iterate with JavaScript Do...While Loops //
/////////////////////////////////////////////////////////////////////////////////////

// Setup
// var myArray = [];
// var i = 10;

// // Only change code below this line.

// do {
//   myArray.push(i);
//   i++;
// } while (i < 5);

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 30TH 2019 Basic JavaScript: Generate Random Fractions with JavaScript //
/////////////////////////////////////////////////////////////////////////////////////

// function randomFraction() {
//   // Only change code below this line.

//   return Math.random();

//   // Only change code above this line.
// }

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 30TH 2019 Basic JavaScript: Profile Lookup //
/////////////////////////////////////////////////////////////////////////////////////

//Setup
// var contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"]
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"]
//   }
// ];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

// // Change these values to test your function
// lookUpProfile("Sherlock", "lastName");

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 30TH 2019 Basic JavaScript: Generate Random Whole Numbers with JavaScript //
/////////////////////////////////////////////////////////////////////////////////////

// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// function randomWholeNum() {
//   // Only change code below this line.

//   return Math.floor(Math.random() * 10);
// }

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 30TH 2019 Basic JavaScript: Generate Random Whole Numbers within a Range //
/////////////////////////////////////////////////////////////////////////////////////

// Example
// function ourRandomRange(ourMin, ourMax) {
//   return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// }

// ourRandomRange(1, 9);

// // Only change code below this line.

// function randomRange(myMin, myMax) {
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// // Change these values to test your function
// var myRandom = randomRange(5, 15);

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 30TH 2019 Basic JavaScript: Use the parseInt Function //
/////////////////////////////////////////////////////////////////////////////////////

// function convertToInteger(str) {
//   let i = parseInt(str);
//   return i;
// }

// convertToInteger("56");

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 30TH 2019 Basic JavaScript: Use the parseInt Function with a Radix //
/////////////////////////////////////////////////////////////////////////////////////

// function convertToInteger(str) {
//   return parseInt(str, 2);
// }

// convertToInteger("10011");

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 30TH 2019 Basic JavaScript: Use the Conditional (Ternary) Operator //
/////////////////////////////////////////////////////////////////////////////////////

// function checkEqual(a, b) {
//   return a === b ? true : false;
// }

// checkEqual(1, 2);

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 30TH 2019 Basic JavaScript: Use Multiple Conditional (Ternary) Operators //
/////////////////////////////////////////////////////////////////////////////////////

// function checkSign(num) {
//   return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero"
// }

// checkSign(10);

//////////////////////////////////////////////////////////////////////////////////////
// SEPTEMBER 30TH 2019 ES6: Explore Differences Between the var and let Keywords //
/////////////////////////////////////////////////////////////////////////////////////

// let catName;
// let quote;
// function catTalk() {
//   "use strict";

//   catName = "Oliver";
//   quote = catName + " says Meow!";
// }
// catTalk();

//////////////////////////////////////////////////////////////////////////////////////
// OCTOBER 1ST 2019 ES6: Compare Scopes of the var and let Keywords //
/////////////////////////////////////////////////////////////////////////////////////

// function checkScope() {
//   "use strict";
//   let i = "function scope";
//   if (true) {
//     let i = "block scope";
//     console.log("Block scope i is: ", i);
//   }
//   console.log("Function scope i is: ", i);
//   return i;
// }

//////////////////////////////////////////////////////////////////////////////////////
// OCTOBER 1ST 2019 ES6: Declare a Read-Only Variable with the const Keyword //
/////////////////////////////////////////////////////////////////////////////////////

// function printManyTimes(str) {
//   "use strict";

//   // change code below this line

//   const SENTENCE = str + " is cool!";
//   for(let i = 0; i < str.length; i+=2) {
//     console.log(SENTENCE);
//   }

//   // change code above this line

// }
// printManyTimes("freeCodeCamp");

//////////////////////////////////////////////////////////////////////////////////////
// OCTOBER 1ST 2019 ES6: Mutate an Array Declared with const //
/////////////////////////////////////////////////////////////////////////////////////

// const s = [5, 7, 2];
// function editInPlace() {
//   "use strict";
//   // change code below this line

//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7;

//   // change code above this line
// }
// editInPlace();

//////////////////////////////////////////////////////////////////////////////////////
// OCTOBER 1ST 2019 ES6: Prevent Object Mutation //
/////////////////////////////////////////////////////////////////////////////////////

// function freezeObj() {
//   "use strict";
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
//   // change code below this line

//   Object.freeze(MATH_CONSTANTS);

//   // change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

//////////////////////////////////////////////////////////////////////////////////////
// OCTOBER 1ST 2019 ES6: Use Arrow Functions to Write Concise Anonymous Functions //
/////////////////////////////////////////////////////////////////////////////////////

// const magic = () => {
//   return new Date();
// }

//////////////////////////////////////////////////////////////////////////////////////
// OCTOBER 1ST 2019 ES6: Write Arrow Functions with Parameters //
/////////////////////////////////////////////////////////////////////////////////////

// const myConcat = (arr1, arr2) => {
//   arr1.concat(arr2);
// };

// // test your code
// console.log(myConcat([1, 2], [3, 4, 5]));

//////////////////////////////////////////////////////////////////////////////////////
// OCTOBER 1ST 2019 ES6: ES6: Write Higher Order Arrow Functions //
/////////////////////////////////////////////////////////////////////////////////////

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = arr => {
//   "use strict";
//   // change code below this line
//   const squaredIntegers = arr
//     .filter(num => num > 0 && num % parseInt(num) === 0)
//     .map(num => Math.pow(num, 2));
//   // change code above this line
//   return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

//////////////////////////////////////////////////////////////////////////////////////
// OCTOBER 1ST 2019 ES6: ES6: FOR EACH, FILTER, MAP, SORT, REDUCE //
/////////////////////////////////////////////////////////////////////////////////////

// const companies = [
//   {name: "Company One", category: "Finance", start: 1981, end: 2003},
//   {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//   {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//   {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//   {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//   {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//   {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//   {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//   {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
// ]

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// forEach
// companies.forEach(company => {
//   console.log(company)
// })

// filter
// const canDrink = ages.filter(age => age >= 21)
// console.log(canDrink)

// const endCompanies = companies.filter(company => company["end"] === 2010);
// console.log(endCompanies);

// const eighties = companies.filter(company => company.start >= 1981 && company.start <= 1989)
// console.log(eighties)

// const tenOrMore = companies.filter(company => (company.end - company.start >= 10))
// console.log(tenOrMore)

// map
// const companyNames = companies.map(company => company.name)
// console.log(companyNames)

// const companyNames = companies.map(function(company) {
//   return company.name
// })

// const companyNames = companies.map(company => `${company.name} has lasted ${company.end - company.start} years!`)

// console.log(companyNames)

// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2)
// console.log(ageMap)

// sort
// const sortedCompanies = companies.sort(function(a,b) {
//   if(a.start > b.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// })

// console.log(sortedCompanies)

// const sortedCompaniesEnd = companies.sort((a,b) => a.end > b.end ? 1 : -1)
// console.log(sortedCompaniesEnd)

// const sortAge = ages.sort((a,b) => a < b ? 1 : -1)
// console.log(sortAge)

// reduce

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i]
// }

// console.log(ageSum)

// const ageTotal = ages.reduce(function(total, age){
//   return total + age
// },0)

// const ageTotal = ages.reduce((total, age) => total + age, 0)

// console.log(ageTotal)

// const companyTotal = companies.reduce(function(total, company) {
//   return total + (company.end - company.start)
// },0)

// console.log(companyTotal)

// const companyTotal = companies.reduce((total, company) => total + (company.end - company.start),0)

// console.log(companyTotal)

//////////////////////////////////////////////////////////////////////////////////////
// OCTOBER 1ST 2019 ES6: Set Default Parameters for Your Functions //
/////////////////////////////////////////////////////////////////////////////////////

// const increment = (function() {
//   "use strict";
//   return function increment(number, value = 1) {
//     return number + value;
//   };
// })();
// console.log(increment(5, 2)); // returns 7
// console.log(increment(5)); // returns 6

//////////////////////////////////////////////////////////////////////////////////////
// OCTOBER 1ST 2019 ES6: Use the Rest Operator with Function Parameters //
/////////////////////////////////////////////////////////////////////////////////////

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
