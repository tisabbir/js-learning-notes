var bd = document.querySelector("h1");

bd.addEventListener("mouseover", function(){
    bd.classList.add("mouseover");
});

bd.addEventListener("mouseout", function(){
    bd.classList.remove("mouseover");
});
