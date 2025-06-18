// DOM Elements
const input = document.getElementById("inputType");
const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", ()=>{
    let char = input.value;
    if(!char){
        result.innerHTML =  "Please enter exactly one character."
        return;
    }
    let code = char.charCodeAt(0);
    result.innerHTML = `For ( ${char} ) ASCII/Unicode value: ${code}`
    input.value = "";
})
