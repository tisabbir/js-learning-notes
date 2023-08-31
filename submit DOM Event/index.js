//finding the elements
const form = document.querySelector('form');
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const pass = form.querySelector("div #pass");
// console.log(form);
// console.log(pass);

//add event listener to the form
//stop autorefresh
//print the value of the form and as array
//after printing remove all the value from the form

form.addEventListener("submit", formHandler);

function formHandler(e){
    e.preventDefault();

    const userInfo = {
        name: name.value,
        email: email.value,
        password: pass.value,

    };
    
    console.log(userInfo);
    name.value = "";
    email.value = "";
    pass.value = "";
}
