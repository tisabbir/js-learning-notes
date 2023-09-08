//object literals

function stuInfo (name,age) {
    return {
        name,
        age
    }
}

// console.log(stuInfo("TI Sabbir",  23
// ));

// how to declare a fn inside an object in concise method

let msg = {
    body(){
        return "Hi, I am object function"
    }
};

console.log(msg.body());