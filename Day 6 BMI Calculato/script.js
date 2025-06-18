const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("male");
const female = document.getElementById("female");
const result = document.getElementById("bmi-result");
const category = document.getElementById("bmi-category");
const btn = document.getElementById("btn");
const wValue = document.getElementById("weight-value");
const hValue = document.getElementById("height-value");


function calBmi(){
    if (!age.value ||( !male.checked && !female.checked)){
        alert("Please fill in all fields");
        return;
    }
    let bmi = weight.value / Math.pow((height.value/100), 2);
    console.log(bmi.toFixed(1));
    result.innerHTML = bmi.toFixed(1);
    let rate = rateBmi(bmi);
    category.innerHTML = rate;
}
function showValue(){
    hValue.innerHTML = height.value;
    wValue.innerText = weight.value;
}
const rateBmi = (bmi) =>{
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 25) return "Normal weight";
    else if (bmi < 30) return "Overweight";
    else return "Obese";
}

btn.addEventListener("click", calBmi);
height.addEventListener("input", showValue);
weight.addEventListener("input", showValue);