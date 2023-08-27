for(i=0; i<3; i++){
    document.querySelectorAll(".but")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        audioPlay(text);
        playAnimation(text);
    })
}

function audioPlay(text){
    switch (text){
        case "a" :
            var audio = new Audio("sounds/a.mp3");
            audio.play();
            break;

        case "b" :
            var audio = new Audio("sounds/b.mp3");
            audio.play();
            break;

        case "c" :
            var audio = new Audio("sounds/c.mp3");
            audio.play();
            break;
    }
}

function playAnimation(text){
   var selected =  document.querySelector("."+text);
    selected.classList.add("anim");

    setTimeout(function(){
        selected.classList.remove("anim");
    }, 2000);
}