// function addNumbers(x,y,z){
//     return x + y + z ;
// }

// let numbers = [1,2,3];
// let numbers3 = [4,5,6];
// console.log(addNumbers(numbers[0], numbers[1],numbers[2]));  // Conventional way
// console.log(addNumbers(...numbers)); //spread operator
// let numbers1 = [7,8, ...numbers];
// let numbers2 = [7,8, ...numbers,9,10];



// let numConcat = [numbers3.concat(numbers)];
// let numConcat2 = [...numbers3, ...numbers];

// console.log(numConcat);
// console.log(numConcat2);

// console.log(numbers2);

// addNumbers();



let p1 = {
    name : "Anisul Islam",
    age : 30
}

let p2 = {
    nationality : "Bangladesh",
    occupation : "teacher"
}

let p  = { ...p1, ...p2};
console.log(p);