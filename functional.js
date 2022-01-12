// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// ##########################
// # Higher-Order Functions #
// ##########################

// Challenge 1
const addTwo = (num) => {
  return num + 2;
};

// To check if you've completed this function, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
const addS = (word) => {
  return word.concat("s");
};

// Uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
const map = (array, callback) => {
  const result = [];

  for (let element of array) {
    result.push(callback(element));
  }

  return result;
};

console.log(map([1, 2, 3], addTwo));

// Challenge 4
const forEach = (array, callback) => {
  for (let element of array) {
    callback(element);
  }
};

// See for yourself if your forEach works!

// Challenge 5
const mapWith = (array, callback) => {
  const result = [];

  forEach(array, (element) => result.push(callback(element)));

  return result;
};

// Challenge 6
const reduce = (array, callback, initialValue) => {
  for (let element of array) {
    initialValue = callback(initialValue, element);
  }
  return initialValue;
};

// Challenge 7
const intersection = (arrays) => {};

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

// Challenge 8
const union = (arrays) => {};

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
const objOfMatches = (array1, array2, callback) => {};

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str) => str.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {};

// console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
// by https://medium.com/@_ericelliott
const pipe = (...functions) => {
  return (value) => {
    return functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };
};

const commutative = (func1, func2, value) => {
  const pipeResult = pipe(func1, func2)(value);
  const reverserPipeResult = pipe(func2, func1)(value);

  return pipeResult === reverserPipeResult;
};

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 12
const objFilter = (obj, callback) => {
  const result = {};

  for (let key in obj) {
    if (callback(key) === obj[key]) result[key] = obj[key];
  }

  return result;
};

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 13
const rating = (arrOfFuncs, value) => {};

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 14
// const pipe = (...functions) => {
//   return (value) => {
//     return functions.reduce((currentValue, currentFunction) => {
//       return currentFunction(currentValue);
//     }, value);
//   };
// };

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 15
const highestFunc = (objOfFuncs, subject) => {
  const arrOfFunc = Object.values(objOfFuncs);

  // accumulator: [previousHighestNum, indexOfHighestFunc]
  const highestFuncWithIndexArr = arrOfFunc.reduce(
    (accumulator, currentFunc, currentIndex) => {
      const mutatedSubject = currentFunc(subject);
      if (mutatedSubject > accumulator[0])
        return [mutatedSubject, currentIndex];

      return accumulator;
    },
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
  );

  const highestFuncIndex = highestFuncWithIndexArr[1];

  return Object.keys(objOfFuncs)[highestFuncIndex];
};

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// ##########################
// # Extension Challenges   #
// ##########################

// Challenge 1
const functionValidator = (funcArr, input, output) => {};

// const addFive = num => num + 5;
// const multiplyByTwo = num => num * 2;
// const subtractOne = num => num - 1;
// const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]

// Challenge 2
const allClear = (funcArr, value) => {};

// const isOdd = num => num % 2 === 1;
// const isPositive = num => num > 0;
// const multipleOfFive = num => num % 5 === 0;
// const numFnArr = [isOdd, isPositive, multipleOfFive];
// console.log(allClear(numFnArr, 25)) // should log true
// console.log(allClear(numFnArr, -25)) // should log false

// Challenge 3
const numSelectString = (numArr) => {};

// const nums = [17, 34, 3, 12]
// console.log(numSelectString(nums)) // should log "3, 17"

// Challenge 4
const movieSelector = (moviesArr) => {};

// const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
// console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]

// Challenge 5
const curriedAddThreeNums = (num1) => {};

// console.log(curriedAddThreeNums(3)(-1)(1)); // should log 3

// Challenge 6
// const curriedAddTwoNumsToFive = ?

// console.log(curriedAddTwoNumsToFive(6)(7)) // should log 18
