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

// console.clear();
// // console.log(location.hostname);

// const div = document.querySelector("div");

// const p1 = div.children[0];
// p1.textContent = location.href;

// const p2 = div.children[1];
// p2.textContent = location.protocol;

// const button = document.querySelector("button");
// button.addEventListener("click", function(){
//     location.assign("https://www.google.com");
// })

// confirm("are you sure?"); //ok and cancel use kora jai

// function deletion (){
//     let value = confirm("Do you want to delete the file?");

//     if (value) {
//         console.log("Deleted");    
//     }
//     else {
//         console.log("not deleted");
//     }
// }
// deletion();

//prompt



// function welcomeMsg(){
//     var h1 = document.createElement("h1");
//     let text;
//     var name = prompt("Enter your name: " );
//     if(name == null || name == ""){
//         text = "no name found";
//     }
//     else {
//         text = "Welcome " + name;
//     }
//     var textNode = document.createTextNode(text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);

// }

// welcomeMsg();

function goodBye(){

    var h1 = document.createElement("h1");
    let text;
    var name = prompt("Enter your Father's Name : ");
    if ( name == null || name == ""){
        text = "No name found";
    }
    else{
        text = "Good Bye Ibnu " + name;
    }

    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);

}
goodBye()