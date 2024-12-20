// Example 1: Square of each number
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); 

// Example 2: Convert to uppercase
const words = ["hello", "world"];
const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords); 

// Example 3: Append a suffix
const names = ["Alice", "Bob", "Charlie"];
const suffixedNames = names.map(name => name + " Jr.");
console.log(suffixedNames); 

// Example 4: Extract property from objects
const people = [{ name: "John" }, { name: "Jane" }, { name: "Smith" }];
const namesOnly = people.map(person => person.name);
console.log(namesOnly); 

// Example 5: Add a fixed value to each element
const prices = [10, 20, 30];
const increasedPrices = prices.map(price => price + 5);
console.log(increasedPrices);
