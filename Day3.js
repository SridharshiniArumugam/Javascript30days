// Control structures 

const res = require("express/lib/response");

//check value is positive or negative 
let x = 20; 
if(x >0)
{
    console.log("postive value")
}
else if(x==0)
{
    console.log("zero")
}
else{
    console.log("negative value")
}
 // check the person eligible for vote (age >=18)

 let y = 18;
 let result = (y>=18) ? "Eligible to vote" : "Not eligible"
 console.log(result)

 // Nested if -- Largest of three numbers 

 let z = 50; 
 if(x>y || z>y){
    if(x>z){
        console.log("X is greater");
    }
    else{
        console.log("Z is greater");
    }
 }
 else{
       console.log("y is greater");
 }
 
 //switch case 
 let day =1;
 switch(day){
 case 1: 
 }