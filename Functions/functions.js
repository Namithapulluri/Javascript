function movies(){
    let object={
    hero: "NTR",
    movie: "Devara",
    director: "Kortala Shiva",
    PlotOfTheMovie: "Devara Part-1 is an action-packed film that follows the journey of Devara, a formidable sea warrior who takes a stand against the criminal activities plaguing his coastal village. His efforts to protect his community lead to a legendary status, instilling fear among criminals. "
    }
    console.log(object);
}
movies()

//1.
let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}
2.
let n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}
//3.
let x = -1;
while (x >= -10) {
    console.log(x);
    x--;
}
//4.
let y = -10;
while (y <= -1) {
    console.log(y);
    y++;
}
//5.
let userInput = prompt("Enter a number:");
let number = Number(userInput);
let sumEven = 0;
let sumOdd = 0;
let i = 1;

while (i <= number) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
        sumEven += i;  
    } else {
        console.log(i + " is Odd");
        sumOdd += i;   
    }
    i++;
}
console.log("Sum of even numbers: " + sumEven);
console.log("Sum of odd numbers: " + sumOdd);
