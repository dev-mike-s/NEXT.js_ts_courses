
// 1.) example with a bug
function ouncesToCups(ounces: number) {
  return `${ounces / 16} cups`;
}

const liquidAmount: number = ouncesToCups(3);
// Type 'string' is not assignable to type 'number'.


// 2.) exercise:
function getRandomNumber() {
  
  return Math.random();
}

const myVar = getRandomNumber();
