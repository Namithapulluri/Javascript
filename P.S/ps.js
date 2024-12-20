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
