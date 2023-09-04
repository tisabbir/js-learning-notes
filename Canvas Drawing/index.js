/*
Create canvas, add id, width, height
Find canvas, add in a var,

.getContext("2d"); method in a variable
create a rectangle shape
add color
add stroke
add color
*/

var c = document.querySelector("canvas");
var ctx = c.getContext("2d");

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10,10,380,280)
ctx.fillStyle = "green";
ctx.fillRect(12,12,376,276);


var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
// ctx.arc(12,12,80,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
