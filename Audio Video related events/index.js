//canplay
//play
//pause
//playing
//ended
//mute the audio
//volume change

const video = document.querySelector("video");

video.addEventListener("canplay", function(){
    console.log("canplay");
});

video.addEventListener("play", function(){
    console.log("play");
});

video.addEventListener("pause", function(){
    console.log("paused");
});
video.addEventListener("playing", function(){
    console.log("playing");
});
video.addEventListener("ended", function(){
    console.log("ended");
});
video.addEventListener("volumechange", function(){
    console.log("volumechanged");
});