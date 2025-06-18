const generateBtn = document.getElementById("generate-btn");
const numberElement = document.getElementById("random-number");
const warningMessage = document.getElementById("warning-message");
const start = document.getElementById("start");
const end = document.getElementById("end");

generateBtn.addEventListener("click", () => {
    let min = parseFloat(start.value);
    let max = parseFloat(end.value);

    if (isNaN(min) || isNaN(max)) {
        min = 1;
        max = 100;
        warningMessage.classList.remove("hidden");
        setTimeout(() => {
            warningMessage.classList.add("hidden");
        }, 2000);
    }
    
    if (min >= max) {
        [min, max] = [max, min];
    }


    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    numberElement.textContent = random;
});
