const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(element => {
    element.addEventListener("click", (event) => {
        const id = event.target.id;
        
        if(id == "decrease") count--;
        if(id == "reset") count = 0;
        if(id == "increase") count++;
        value.textContent = count;
        value.style.color = count > 0 ? "green" : count < 0 ?"red" : "#007bff"
    })
});
    