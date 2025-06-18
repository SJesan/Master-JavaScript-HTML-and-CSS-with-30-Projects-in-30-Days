const colorOne = document.getElementById("color-a");
const colorTwo = document.getElementById("color-b");
let currentDirection = 'to bottom';
let outputCode = document.getElementById("code");
let code;

function setDirection(btn, elements) {
    document.querySelectorAll(".buttons button").forEach(btn => btn.classList.remove("active"));
    elements.classList.add("active");
    
    currentDirection = btn;
    showCode();
}

const generateCode = () => {
    code = `linear-gradient(${currentDirection},${colorOne.value},${colorTwo.value})`
    document.body.style.background = code;
}

const showCode = () => {
    code = `linear-gradient(${currentDirection},${colorOne.value},${colorTwo.value})`
    outputCode.textContent = code;
}
colorOne.addEventListener("input", showCode);
colorTwo.addEventListener("input", showCode);


const copyText = () => {
    navigator.clipboard.writeText(code)
        .then(() => {
            alert('Gradient Copied!');
        });
}
window.onload = showCode;