/* 
find element
onclick
double click
mouse down
mouse up
mouse enter
mouse leave
mouse move 
mouse over

*/

const div = document.querySelector("div");

div.addEventListener("click", function(){
    console.log("click occured")
});
div.addEventListener("dblclick", function(){
    console.log("double click occured")
});
div.addEventListener("mousedown", function(){
    console.log("mouse down occured")
});
div.addEventListener("mouseup", function(){
    console.log("mouse up occured")
});
div.addEventListener("mouseenter", function(){
    console.log("mouse enter occured")
});
div.addEventListener("mouseleave", function(){
    console.log("mouse leave occured")
});
div.addEventListener("mousemove", function(e){
    // console.log("mouse move occured");
    console.log("clientX = " + e.clientX + "");
    console.log("clientY = " + e.clientY + "");
    console.log("offsetX = " + e.offsetX + "");
    console.log("offsetY = " + e.offsetY + "");
});
div.addEventListener("mouseover", function(){
    console.log("mouseover occured")
});
