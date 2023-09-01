const button = document.querySelector("button");
const clock = document.querySelector("p");

button.addEventListener("click",clockStart);

function clockStart(){
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

minute = format(minute);
second = format(second);

    let time = hours + " : " + minute + " : " + second; 

    clock.textContent = time;

    setInterval(clockStart,1000)
}

function format(value){
    if(value<10){
        value = "0"+value;
    }
    return value;
}