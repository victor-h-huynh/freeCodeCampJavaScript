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
