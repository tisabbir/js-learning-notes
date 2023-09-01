/*
textarea
keydown
keypress
keyup
key , keycode, code, shiftKey
*/

const key = document.querySelector("textarea");

// key.addEventListener("keydown", function(){
//     console.log("keydown");
// });
// key.addEventListener("keypress", function(){
//     console.log("keypress");
// });
key.addEventListener("keyup", function(e){
    console.log(e.shiftKey);
});