const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, n) => {
    return total + n;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, n) => {
    return total *= n;
  }, 1);
};

const power = function(a, b) {
	let ans = a;
  for (let i = 0; i < b-1; i++) {
    ans *= a;
  }
  return ans;
  // return Math.pow(a, b);
};

const factorial = function(a) {
	let ans = 1;
  for (let i = a; i > 1; i--) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
