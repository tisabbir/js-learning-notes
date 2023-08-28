console.clear();

// const input = document.querySelector("input");
// input.addEventListener("change", changeHandler);

// function changeHandler (event) {
// // // console.log(event.type)
// // console.log(event.target.value);
// }

const programs = document.querySelectorAll("input[name=program]");
// console.log(programs);
//convert programs node list into array
Array.from(programs).map((program) => {
program.addEventListener("change", programHandler)
})
function programHandler (e) {
    if(e.target.checked){
        console.log(e.target.value);
    }
    
}



// const pro = document.querySelectorAll("input[name=program]");

// Array.from(pro).map((pro) => {
//     pro.addEventListener("change", proHandler);
// })

// function proHandler(e) {
//     console.log("checked");
// };


const depterment = document.querySelector("#depert");
// console.log(depterment);
depterment.addEventListener("change",handler);

function handler (e){
    console.log(e.target.value);
}