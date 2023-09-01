/*
BOM
window object
location object
href
protocol
hostname
port
pathname
add h1 tag, div, p 5ta
print different locations+
*/

console.clear();
// console.log(location.hostname);

const div = document.querySelector("div");

const p1 = div.children[0];
p1.textContent = location.href;

const p2 = div.children[1];
p2.textContent = location.protocol;

const button = document.querySelector("button");
button.addEventListener("click", function(){
    location.assign("https://www.google.com");
})