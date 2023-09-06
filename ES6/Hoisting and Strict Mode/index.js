//hoisting


//FOR VAR THE CODE RUN PERFECTLY
// x=20;
// if(true){
//     y=10;
//     console.log(`y = ${y}`);
//     var y;
// }
// console.log(`x = ${x}`);
// var x;


//FOR LET THE CODE SHOWS REFERENCE ERROR
// console.log(`x = ${x}`);
// let x;

//FOR CONST THE CODE SHOWS SYNTEXT ERROR
// console.log(`x = ${x}`);
// let x;


// -----The Strict Mode ----

"use strict"
x=20;
console.log(`x = ${x}`);