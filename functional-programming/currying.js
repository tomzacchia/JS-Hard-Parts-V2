// RESOURCE: https://huynvk.dev/blog/currying-in-javascript-and-its-practical-usage

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

// EXAMPLE 3: flow (pipe) example

const add2 = (a) => a + 2;
const multiplyBy3 = (a) => a * 3;
// NOTE: logNumber should log and return number.
// const log = (a) => {
//   console.log(a);
//   return a;
// };
const logNumber = (number) => console.log("message is:", number);

_.flow(add2, multiplyBy3, logNumber)(2);

_.flowRight(logNumber, multiplyBy3, add2)(2);

// EXAMPLE 3: Pipe and Currying combined
const sum_new = (a) => (b) => a + b;
const multiply_new = (a) => (b) => a * b;

const addTransactionFee = sum_new(2);
const addTax = multiply_new(1.1);
const addMonthlyPromotion = multiply_new(0.8);
const log = (a) => {
  console.log(a);
  return a;
};

const paymentAmount = _.flowRight(
  log,
  addTransactionFee,
  log,
  addTax,
  log,
  addMonthlyPromotion
)(100);

// PROBLEM: What if we want a custom label for log?
// SOLUTION: currying
const log2 = (label, value) => {
  console.log(label, value);
  return value;
};

const curriedLog = _.curry(log2);

const paymentAmount2 = _.flowRight(
  curriedLog("addTransactionFee"),
  addTransactionFee,
  curriedLog("addTax"),
  addTax,
  curriedLog("addMonthlyPromotion: "),
  addMonthlyPromotion
)(100);

const paymentAmount3 = _.flow(
  addMonthlyPromotion,
  curriedLog("addMonthlyPromotion: "),
  addTax,
  curriedLog("addTax"),
  addTransactionFee,
  curriedLog("addTransactionFee")
)(100);
