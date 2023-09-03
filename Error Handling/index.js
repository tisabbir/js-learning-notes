//try, catch,finally, throw

/*
try{
    //code test
    alert("HI everyone");
    // alert(x);
    alert("Bye");
}
catch(err){
    //handle error
    alert("there is error in the code");
    console.log(err);
    // console.log(err.name);
    // console.log(err.massage);
}finally{
    alert("Bye Everyone")
}
*/

document.querySelector("#checkButton").addEventListener("click", function(){
    var num = document.querySelector("#numText").value;
    console.log(num);

    try{
        if(num < 5){
            throw "input is too low"
        } else if(num > 10){
            throw "input is too high"
        }
    }catch(err){
        console.log(err);
    }
})


// alert("HI everyone");
// alert(x); //the error is here
// alert("Bye");