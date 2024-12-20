//1. Write a code snippet to find the length of an array.
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length); 

//2. How do you add an element to the end of an array?
let arr2 = [1, 2, 3];
arr2.push(4);
console.log(arr2); 

//3. How do you remove the last element from an array?
let arr3 = [1, 2, 3, 4];
arr3.pop();
console.log(arr3); 

//4. How do you add an element to the beginning of an array?
let arr4 = [2, 3, 4];
arr4.unshift(1);
console.log(arr4); 

//5. How can you remove the first element from an array?
let arr5 = [1, 2, 3, 4];
arr5.shift();
console.log(arr5); 

//6. How do you reverse the elements in an array?
let arr6 = [1, 2, 3, 4];
arr6.reverse();
console.log(arr6); 

//7.How can you find the index of a specific value in an array?  in js 
let arr7 = [1, 2, 3, 4, 5];
let index = arr7.indexOf(3);
console.log(index); 

//8. How can you check if a certain value exists in an array?
let arr8 = [1, 2, 3, 4, 5];
let exists = arr8.includes(3);
console.log(exists); 

//9. How can you sort the elements of an array in ascending order?
let arr9 = [5, 2, 4, 1, 3];
arr9.sort((a, b) => a - b); 
console.log(arr9); 

//10. How can you convert an array to a string using commas as separators?
let arr10 = [1, 2, 3, 4, 5];
let str1 = arr10.join(',');
console.log(str1); 


//Questions with Multiple Array Methods:
//1. Write a code snippet that adds an element to the end of an array, then removes the first element.
let arr11 = [1, 2, 3];
arr11.push(4);
console.log(arr11); 
arr11.shift();
console.log(arr11); // Output: [2, 3, 4]

//2. How can you reverse an array and then join the elements into a string?
let arr12 = [1, 2, 3, 4, 5];
arr12.reverse();
console.log(arr12);
let str2 = arr12.join(',');
console.log(str2); 

//3. Write a code that first sorts an array in ascending order, then removes the last element.
let arr13 = [5, 2, 8, 1, 4];
arr13.sort((a, b) => a - b); 
console.log(arr13); 
arr13.pop();
console.log(arr13); 

//4. How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
let arr14 = [3, 4, 5];
arr14.unshift(1, 2);
console.log(arr14);
arr14.shift();
console.log(arr14);
let length = arr14.length;
console.log(length); 

//5. How do you combine two arrays, sort the combined array, and then remove the last element?
let arr15 = [5, 2, 8];
let arr16 = [1, 4, 7];
let combinedArr = arr15.concat(arr16);
console.log(combinedArr); 
combinedArr.sort((a, b) => a - b);
console.log(combinedArr); 
combinedArr.pop();
console.log(combinedArr); 


//Question 1: Manage a Guest List

var arr17 = ["Alice", "Bob", "Charlie", "David"];
var unshift = arr100.unshift("John");
// console.log(arr);
var pop = arr17.pop();
console.log(arr17);
var checking = arr100.includes("Bob");
console.log(checking);

//Question 2: Generate a Sentence
var str3 = "Learn, Practice, Improve,";
var split = str3.split(" ");
var reverse = split.reverse();
// console.log(reverse);
var result = reverse.join(" ");
console.log(result);

//Question 3: Create a Playlist
var arr18 = ["Song1", "Song2", "Song3"];
var arr19 =  ["Song4", "Song5"];
var concat = arr18.concat(arr19);
var shift = concat.shift();
var push = concat.push("Song6");
console.log(concat);

//Question 4: Extract Favorite Movies
var movies = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];
var slice = movies.slice(1,4);
var NewArray = slice.push("The Matrix", "The Godfather");
var reversing = slice.reverse()
console.log(slice);

//Question 5: String Operations on Names
var string = "John,Doe,Jane,Smith";
var split = string.split(" ");
var includes = string.includes("Jane")
var reverses = split.reverse();
console.log(reverses);

//Question 6: Length-Based Manipulation
let numbers = [1, 2, 3, 4, 5];
numbers.shift();
numbers.push(6, 7);
let finalLength = numbers.length;
console.log("Final Array:", numbers);
console.log("Final Length:", finalLength);

//Question 7: Shopping Cart Operations
let shoppingCart = ["Milk", "Bread", "Eggs", "Butter"];
let hasEggs = shoppingCart.includes("Eggs");
console.log("Contains Eggs:", hasEggs);
shoppingCart = shoppingCart.filter(item => item !== "Butter");
shoppingCart.push("Cheese", "Juice");
console.log("Final Shopping Cart:", shoppingCart);

//Question 8: Rearrange and Combine Names
let array19 = ["Alice", "Bob", "Charlie"];
let array20 = ["David", "Eve"];
array19.reverse();
let combinedArray2 = array1.concat(array20);
combinedArray2.unshift("Frank");
console.log("Final List:", combinedArray2);

//Question 9: Shopping Cart Operations
let ShoppingCart = ["Milk", "Bread", "Eggs", "Butter"];
let eggsIndex = ShoppingCart.indexOf("Eggs");
console.log("Index of 'Eggs':", eggsIndex);
if (eggsIndex !== -1) {
  ShoppingCart[eggsIndex] = "Cheese";
}
ShoppingCart.unshift("Juice");
console.log("Final Shopping Cart:", ShoppingCart);




