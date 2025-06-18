// Inputs
const billInput = document.getElementById("bill");
const tipSlider = document.getElementById("tip");
const peopleSlider = document.getElementById("no-of-people");

// Live Range Labels
const tipPercentLabel = document.getElementById("tip-percent");
const peopleCountLabel = document.getElementById("split-num");

// Outputs
const tipAmountText = document.getElementById("tip-amount");
const totalAmountText = document.getElementById("total-amount");
const tipPerPersonText = document.getElementById("tip-per-person");
const totalPerPersonText = document.getElementById("total-per-person");

const calculate = () => {
    let bill = parseFloat((billInput.value).replace(/\s+/g, ""));
    let tips = parseFloat(tipSlider.value);
    let people = parseFloat(peopleSlider.value);

    if (isNaN(bill) || bill < 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    tipPercentLabel.innerHTML = `${tips}%`;
    peopleCountLabel.innerHTML = people;


    let tipsAmount = bill * (tips / 100);
    let totalAmount = bill + tipsAmount;
    let personAmount = tipsAmount / people;

    tipAmountText.innerHTML = `$ ${tipsAmount.toFixed(2)}`;
    totalAmountText.innerHTML = ` $ ${totalAmount.toFixed(2)}`;
    tipPerPersonText.innerHTML = ` $ ${personAmount.toFixed(2)}`;
    totalPerPersonText.innerHTML = people;
}

[billInput, tipSlider, peopleSlider].forEach(input =>
    input.addEventListener("input", calculate)
);

billInput.addEventListener("focus", () => {
    billInput.value = "";
})
window.addEventListener("load", calculate);