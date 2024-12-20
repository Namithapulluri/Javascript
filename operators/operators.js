//1. voting eligibility
var age=prompt("Enter your age for voting")
if(age>=18){
    console.log("eligible to vote");
    
}else{
    console.log("not eligible to vote");
}

//2. Marriage eligibility
var male_age=prompt("enter male  age");
var female_age=prompt("enter female age");
if(male_age>=21 && female_age>=18){
    console.log("you are eligible to marry")
    }else{
    console.log("you are not eligible marry")
}

//3. Driving licence
var license=prompt("Enter your age for driving license")
if(license>=18){
    console.log("eligible to drive");
     
}else{
    console.log("not eligible to drive");
}

//4. Exam eligibility

var attendance = prompt("Enter your attendance percentage:");
if (attendance >= 75) {
    console.log("You are eligible to appear for the exam.");
} else {
    console.log("You are not eligible to appear for the exam.");
}

//5. Discount eligibility
var discount=prompt("Enter your age for discount")
if(discount>=60){
    console.log("eligible for discount");
    
}else{
    console.log("not eligible for discount");
}

