//for...of and for...in


//for ... of
// const names = ["s1", "s2", "s3"];

// for(let name of names){
//     console.log(name);
// };


//for ... in ( very important)

// let students = {
//     ID : 101,
//     name: "Anisul Islam",
//     cgpa : 3.92
// }

// for(let x in students){
//     console.log(x + " = " + students[x]);
// }

//------for vs foreach--------

//FOR

// var numbers = [10,20,30,40];
// for(var x=0; x<numbers.length; x++ ){
//     console.log(numbers[x]);
// }

//FOR EACH

// var number = [3,4,5,6,7];
// number.forEach(myFunction);
// function myFunction(x){
//     console.log(x);
// }

//Squaring all the numbers of an array and putting it back in another array

// var number = [3,4,5,6,7];
// var sqr = [];
// number.forEach(myFunction);
// function myFunction(x){
//     sqr.push(x*x);
// }
// console.log(sqr);

//updating the existing array

var number = [3,4,5,6,7];
number.forEach(myFunction);
function myFunction(x,index,arr){
    arr[index] = x+5;
}
console.log(number);
