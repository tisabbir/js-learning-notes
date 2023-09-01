const div = document.querySelector("div");

div.addEventListener("click", function(e){
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.textContent);
    // console.log(e.target.innerHTML);
    
});

const btn = document.querySelectorAll(".btn");

Array.from(btn).map((button) => {
    button.addEventListener("click", function(e){
        console.log(e.target.innerText);
    })
} ) 
