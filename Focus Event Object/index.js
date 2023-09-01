/*
add input
blur
focus 
focus in
focus out
change the style after transition
taking the value from the blur
toUpperCase

*/

const input = document.querySelector("input");

input.addEventListener("blur", function(e){
    // console.log("blur occured");
    input.value = e.target.value.toUpperCase();
});
input.addEventListener("focus", function(e){
    input.style.backgroundColor = "tomato";
    input.style.padding = "2rem";

});
// input.addEventListener("focusin", function(){
//     console.log("focusin occured");
// });
// input.addEventListener("focusout", function(){
//     console.log("focusout occured");
// });