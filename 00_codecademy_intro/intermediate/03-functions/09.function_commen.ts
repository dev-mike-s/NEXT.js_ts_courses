
// single line commenct

/*
multi line 
comment
*/

/**  
 *  The function takes two typed parameters and concanates them 
 *  algorithmically together to a new String. 
 *  @param fruit1 is type of string
 *  @param fruit2 is type of string
 *  @returns void => nothing
 */
function makeFruitSalad(fruit1: string, fruit2: string): void {
  
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
  
  console.log(salad);
}

/**  
 *  The function iterates through with a for loop until the 
 *  second parameter is reached, while prints the current status.
 *  @param status is a type-implicit written static string
 *  @param repeat is a type-implicit fixed number.
 *  @returns function has no return value
 */
function proclaim(status = 'not ready...', repeat = 1) {
  
  for (let i = 0; i < repeat; i += 1) {
    
    console.log(`I'm ${status}`);
  }
}