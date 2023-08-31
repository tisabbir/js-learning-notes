//load, unload
//scroll
//resize
//toggle


window.addEventListener("load", function(){
    console.log("loaded");
})
// window.addEventListener("unload", function(){
//     console.log("unloaded");
// })

window.addEventListener("scroll", function(){
    console.log("scrolled");
})

window.addEventListener("resize", function(e){
    // console.log("resized");
    const width = window.outerWidth;
    const height = window.outerHeight;

    console.log( "width= "+width);
    console.log("height= "+height);

})

const details = document.querySelector("details");
details.addEventListener("toggle", function(e){

    console.log(e.target.open);
})