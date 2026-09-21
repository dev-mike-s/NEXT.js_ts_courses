
// 1. theory

function logGreeting(name:string): void{
  
  console.log(`Hello, ${name}!`)
}

// 2. exercise
// function makeFruitSalad(fruit1:string, fruit2:string):string{  => error
function makeFruitSalad(fruit1:string, fruit2:string): void {
  
  let salad=fruit1+fruit2+fruit2+fruit1+fruit2+fruit1+fruit1;
  
  console.log(salad);
}

makeFruitSalad('banana','pineapple');
