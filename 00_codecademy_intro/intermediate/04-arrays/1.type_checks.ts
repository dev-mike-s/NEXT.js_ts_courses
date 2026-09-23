// @ts-nocheck

// 1. theory:
let firstArray = [1, 2, 3, 4];
let secondArray =  [5, '6', [7]];


// exercise 1:
let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

function checkCustomersArray() {

  customersArray.forEach((el) => {

    if (typeof el !== 'string') {
      
        console.log(`Type error: ${el} should be a string!`)
    }
  })
};
checkCustomersArray();


// exercise 2:
let newArr = [];

function stringPush(val) {

  if (typeof val == 'string') {

    newArr = customersArray.push(val);
    newArr = [...customersArray];
  }
}

stringPush('New Customer');
console.log(newArr);
