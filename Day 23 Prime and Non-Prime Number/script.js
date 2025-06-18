const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');

checkButton.addEventListener("click", () =>{
    const num = parseInt(numberInput.value);
    if(isNaN(num)){resultMessage.innerHTML = "Please enter a valid number."; return;}
    const check = isPrime(num);
    const result = check ?  `${num} is a Prime Number ✅` : `${num} is NOT a Prime Number ❌`;
    resultMessage.innerHTML = result;
    numberInput.value="";
})

   function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

