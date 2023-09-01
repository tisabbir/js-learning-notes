/*
Timing Events
set time out
set time interval

*/

// setTimeout(()=> {
//     console.log("msg shown after 3 seconds")
// }, 3000);


// setTimeout(sec, 3000);

// function sec(){
//     console.log("msg shown after 3 seconds")
// }


//when submited a form , a success msg is shown that will disappear after 2 second;

const btn = document.querySelector("button");
const para = document.querySelector("p");


//     btn.addEventListener("click", function(){
//         para.textContent = "You have successfully registered";
    
//         setTimeout(()=>{
//             para.textContent = "";
//         },2000)
//     });



//SET INTERVAL

btn.addEventListener("click", displayTimer);

function displayTimer(){
    let count = 10;
    para.textContent = count;

    setInterval(()=>{
        count--;
        para.textContent = count;

        if (count<0){
            para.textContent = "Time out";
            
        }
        else{
            para.textContent = count;
        }
        
    },1000)
}