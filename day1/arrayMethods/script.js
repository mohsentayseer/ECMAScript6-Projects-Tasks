let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
//a. test that every element in the given array is a string
var stringCheck = fruits.every((ele) => typeof ele === "string");
console.log(stringCheck);
//b. test that some of array elements starts with "a"
var startsWithA = fruits.some((ele) => ele.startsWith("a"));
console.log(startsWithA);
//c. generate new array filtered from the given array with only elements that starts with "b" or "s"
var filteredFruits = fruits.filter(
  (ele) => ele.startsWith("b") || ele.startsWith("s")
);
console.log(filteredFruits);
//d. generate new array each element of the new array contains a string declaring that you like the give fruit element “I like ” + fruit[0]
var likedFruits = fruits.map((ele) => `I like ${ele}`);
console.log(likedFruits);
//e. use forEach to display all elements of the new array from previous point.
likedFruits.forEach(
  (ele) => (document.querySelector("body").innerHTML += `<h1>${ele}</h1>`)
);
likedFruits.forEach((likedFruit) => console.log(likedFruit));
