var a=20;
a=40;
a=50;
a= a+ 70;  
a=a+100;  
a += 200;   
console.log(a); 

var b=30;
b=10;
b=b-2 
b-=10;   
console.log(b);

var c=100;
c= c*2;  
c *= 1  
c *= 6; 
console.log(c);

var d=50;
d =d /10;  
d /= 5; 
console.log(d);


var e=5;
e = e % 3;
e %=2;
console.log(e);


var f=[1,2,3];
f[2]="Demon Slayer";
f[3]=true
f[10]="House of the dragons"
f[20]=""

f.length=5
console.log(f[7]);
console.log(f);
console.log(f.length);


var g={
    id:1,
    name:"Tony Stark",
    state:"California"
}
console.log(g);
g.id=10;
g.name="Steve";
g.state="Texas"
delete g.id;
delete g.name;
console.log(g);

var h=10;
var j=20;
console.log(h && j); 
console.log(h && j); 
console.log(h>j && h<j);   
console.log(h<j && h>j);  
console.log(false && true);  

 var a1=10;
 var b1=0;
 var c1=10;
 console.log(a1>b1 || a1>b1);
 console.log(a1<b1 || a1<b1 || c1>b1);  


if(!!"Chandler"){
    alert("Hello")
}else{
    alert("Hii")
}

if(15 && 15){  
    alert("Hello")
}else{
    alert("Hii")
}
        
if(["John Snow"] && [1,2,3]){  
    alert("Hello")
}else{
    alert("Hiii")
}

if(["Daenerys"] == [1,2,3]){
    alert("Hello")
}else{
    alert("Hii")
}

if(["Trion"]){  
    alert("Hello")
}else{
    alert("Hii")
}

if(["Stefen"] && " "){  
    alert("Hello")
}else{
    alert("Hii")
}


if(["Joey"] && undefined){  
    alert("Hello")
}else{
    alert("Hiii")
}

if(null && null){  
    alert("Hello")
}else{
    alert("Hiii")
}

if("" || 10){  
    alert("Hello")
}else{
    alert("Hiii")
}

if(["Damon"] || undefined){  
    alert("Hello")
}else{
    alert("Hii")
}