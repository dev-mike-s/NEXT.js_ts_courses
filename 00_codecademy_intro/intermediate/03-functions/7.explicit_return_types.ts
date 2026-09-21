
// 1.) Theory:
function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }

  return undefined;
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

const createArrowGreeting = (name?: string): string => {
  if (name) {
    return `Hello, ${name}!`;
  }

  return undefined;
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};


// 2.) Exercise:

import {getUserChoice,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12} from './resources'

function returnFruit():string {

  let num = getUserChoice();

  switch(num){

    case 1 : return f1();
		case 2 : return f2();
		case 3 : return f3();
		case 4 : return f4();
		case 5 : return f5();
		case 6 : return f6();
		case 7 : return f7();
		case 8 : return f8();
		case 9 : return f9();
		case 10 : return f10();
		case 11 : return f11();
		case 12 : return f12();
  }
  return 'durian.jpg'
}

console.log(returnFruit());

//The problematic function is f9()
//'tsc' in the shell shows the buggy function (f9) with the message:
//'type number is not assignable to the type string'
