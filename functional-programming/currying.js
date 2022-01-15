// EXAMPLE 1: Curried functions intro

const sum = (a, b) => a + b;
console.log("normal sum ", sum(1, 2)); // 3

const curriedSum = function (a) {
  return function (b) {
    return a + b;
  };
};

console.log("curried sum ", curriedSum(1)(2));

// EXAMPLE 2: Using _.curry

const PERCENT_120 = 1.2;
const multiply = (a, b) => a * b;

const multiplyCurried = _.curry(multiply);
const increase20Percent = multiplyCurried(1.2);

const newSalary = increase20Percent(20);

console.log("newSalary : ", newSalary);
