//String Methods
//1.
var str1 = "   Game of thrones"
var str2 = "Friends   "
var trimming1 = str1.trim()
var trimming2 = str2.trim()
var combinedstring = trimming1 + trimming2;
var combinedstring = combinedstring.toUpperCase();
console.log(combinedstring);

//2.
var str = "IronMan";
var slice = str.slice(2,5);
var lastindex = slice.charAt(2);
var lowercase = lastindex.toLowerCase();
console.log(lowercase);

//3.
var char = "n";
var string = "deadpool";
var combining = char.concat(string);
var uppercase = combining.toUpperCase();
var extracting = uppercase.charAt(6);
console.log(extracting);

//4.
var string1 = "Virat"
var string2 = "Rohit"
var extractstr1 = string1.slice(0,3);
var extractstr2 = string2.slice(2,5);
// var combining2strings = extractstr1 + extractstr2;
var strings = extractstr1.concat(extractstr2);
var UppercaseString = strings.toUpperCase();
console.log(UppercaseString);

//5.
var Str = "  Bhuvi"  ;
var trim = Str.trim();
var FirstChar = trim[0].toUpperCase();
var LastChar = trim[trim.length-1].toUpperCase();
var MiddlePart = trim.slice(1,4);
var NewString = FirstChar.concat(MiddlePart);
console.log(NewString);

//6.
var sentence = "hello there , how are you ";
var split = sentence.split(" ");
var CheckIndex = split.indexOf("are");
console.log(CheckIndex);

//Object Methods
//1.
var person={
    FirstName: "Tony",
    LastName: "Stark",
    Age: 50
}
console.log(person.FirstName);
person.city = "New York";
console.log(person);

//2.
var product={
    name: "steve",
    price: "500",
    InStock: "yes"
}
product.InStock = "true";
delete product.InStock;
console.log(product);

//3.
var library={
    fantacy:{
            books: ["Harry Potter", "Game of thrones"]
    },
    mystry:{
        books: ["Sherlock Holmes", "Gone Girl"]
    }
}
library.scienceFiction = {
    books: ["Dune", "Dark"]
};
console.log(library.fantasy.books[0]);

//4. 
var user=
{username:"Namitha",
    email:"namitha@gmail.com",
    address:{city:"Siddipet",
        state:"Telanagana",
        zip:"502281"}}
Object.freeze(user);
user.email="namitha@gmail.com"
console.log(user);
var userfrozen=Object.isFrozen(user);
 console.log(userfrozen);
 user.phone="9100"
 console.log(user); 

 //5.
 var car=
 {make:"premium cars",
    model:"Toyota Fortuner",
    price:"₹33.43"}
 Object.seal(car);
 delete car.make
 console.log(car); 
 var carseal=Object.isSealed(car);
 console.log(carseal);
 car.price="40 lakhs"
 console.log(car);
  var carextensible=Object.isExtensible(car);
  console.log(carextensible);
  
  
  