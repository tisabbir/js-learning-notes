//add buttons 3 
//by clicking button, button is clicked

var len = document.querySelectorAll(".my-button").length;



for(var i=0; i< len; i++){
    var button = document.querySelectorAll(".my-button")[i];
    button.addEventListener("click",function(){
   var text = this.innerHTML;
   var change = document.querySelector("h1");
    change.innerHTML = text + " is clicked.";
})
}