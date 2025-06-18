const count = document.querySelector("p");
const input = document.querySelector("input");

input.addEventListener("input",() =>{
    count.textContent = input.value.length;
})