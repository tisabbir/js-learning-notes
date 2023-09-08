"use strict"

//Default Parameter
function message(text = `Hello this is default parameter`){
    console.log(`${text}`);
}

message();
message("I love js es6");

//Rest Parameter

function printNumber(x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
printNumber(10,20,30,340,50);