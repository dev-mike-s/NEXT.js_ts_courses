import restaurants from './restaurants'; // data driven

const dollarSigns = '$$';
const deliveryTimeMax = 90;
const maxDistance = 10;
const priceBracket: number = dollarSigns.length;
const hour: number = new Date().getHours();
let result: string;

const filteredRestaurants = restaurants.filter((restaurant) => 
{
  // in price range?
  if (restaurant.priceBracket > priceBracket) {
    return false;
  }
  // in delivery time?
  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
    return false;
  }
  // in distance?
  if (restaurant.distance > maxDistance) {
    return false;
  }
  // is it open?
  if (hour < restaurant.openHour || hour >= restaurant.closeHour) {
    return false;
  }
  return restaurant;
});

if (filteredRestaurants.length === 0) 
{
  result = 'There are no restaurants available right now.';
} else {
  //let restaurantName: string = filteredRestaurants.name;
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
console.log(hour);
