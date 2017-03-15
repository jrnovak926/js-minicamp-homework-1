//Do not change any of the function names

function multiplyByTen(num) {
    var Product = num * 10;
    return Product;
}

function subtractFive(num) {
      var Subtraction = num - 5;
      return Subtraction;
}

function areSameLength(str1, str2) {
      if(str1.length === str2.length){
       return true;
        }
        return false;
}

function areEqual(x, y) {
      if(x === y){
        return true;
        }
        return false;
}

function lessThanNinety(num) {
      if (num < 90){
        return true;
        }
        return false;
}

function greaterThanFifty(num) {
      if (num > 50){
        return true;
        }
        return false;
}

function add(x, y) {
    var sum = x + y;
    return sum;
}

function subtract(x, y) {
  var sub = x - y;
  return sub;
}

function divide(x, y) {
  var divide = x/y;
  return divide;
}

function multiply(x, y) {
    var multiply = x * y;
    return multiply;
}

function getRemainder(x, y) {
    var remainder = x % y;
    return remainder;
}

function isEven(num) {
    if (num % 2 === 0){
      return true;
      }
      return false;
}

function isOdd(num) {
    if (num % 2 === 1){
      return true;
      }
      return false;
}

function square(num) {
    var sqaured = Math.pow(num, 2);
    return sqaured;
}

function cube(num) {
  var cubed = Math.pow(num, 3);
  return cubed;
}

function raiseToPower(num, exponent) {
    var numpowered = Math.pow(num, exponent);
    return numpowered;
}

function roundNumber(num) {
    var numrounded = Math.round(num);
    return numrounded;
}

function roundUp(num) {
    var roundedup = Math.ceil(num);
    return roundedup;
}

function addExclamationPoint(str) {
    var fullstring = str + '!';
    return fullstring;
}

function combineNames(firstName, lastName) {
    var schoolname = firstName + ' ' + lastName;
    return schoolname;
}

function getGreeting(name) {
    var greeting = 'Hello ' + name + '!';
    return greeting;

}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
    var rectanglearea = length * width;
    return rectanglearea;
}

function getTriangleArea(base, height) {
    var trianglearea = (1/2) * (base * height);
    return trianglearea;
}

function getCircleArea(radius) {
    var cirlcearea = 3.14 * Math.pow(radius, 2);
    return Math.round(cirlcearea);
}

function getRectangularPrismVolume(length, width, height) {
    var prismvolume = length * width * height;
    return prismvolume;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
