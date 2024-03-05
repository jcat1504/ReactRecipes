//how to destructure elements from array

const numbers = [2, 39, 64];

//traditionally...
// const firstNumber = numbers[0];
// const secondNumber = numbers[1];

const [firstNumber, secondNumber, thirdNumber] = numbers;

console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

//rest operator captures remaining elements
const favFood = ["kbbq", "hotpot", "unagi", "banh xeo"];

const [firstFavFood, secondFavFood, ...restFavFood] = favFood;

console.log(firstFavFood);
console.log(secondFavFood);
console.log(restFavFood);

//destructuring from objs
const zero = {
    breed: "Pit Bull",
    favoriteFood: "Chicken nuggets",
    favoriteHobby: "Long walks"
};

//traditional
// const breed = zero.breed;
// const favoriteFood = zero.favoriteFood;

const {breed, favoriteFood} = zero;

console.log(breed);
console.log(favoriteFood);

//destructuring w. default values

const user = { name: "Jess"};

const {name = "Anonymous", city = "Unknown"} = user;

console.log(name);
console.log(city);