// @ts-nocheck

// 1. theory: 

let ourTuple:   [string, number, string, boolean] = 
                ['Is', 7 , 'our favorite number?' , false]; 

let numbersTuple:   [number, number, number] = 
                    [1,2,3]; 
    // Type Error! numbersTuple should only have three elements.

let mixedTuple: [number, string, boolean] = 
                [3, 'hi', true]; 
    // Type Error! The first elements should be a number, the second a string, and the third a boolean. 


// 2. exercise:

let favoriteCoordinates:    [number, number, string, number, number, string] = 
                            [40, 43.2, 'N', 73, 59.8, 'W'];

favoriteCoordinates[6] = -6.825;

//'tsc' error: Tuple type of length '6' has no element at index '6'.  

//The whole point of tuples is that they have fixed lengths, 
// so you cannot access elements of favoriteCoordinates with indices greater than 5.
