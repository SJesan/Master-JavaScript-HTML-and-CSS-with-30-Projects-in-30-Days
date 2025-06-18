let input = [
    js = 0,
    py = 0,
    java = 0,
    c = 0
]
const oplist = document.querySelectorAll(".options button");
const resultlist = document.querySelectorAll(".results .result");
const btn = document.getElementById("btn");

const update = (item, index) => {
    input[index]++;
}

let temp = '';
oplist.forEach((item, index) => {
    item.addEventListener("click", () => {
        oplist.forEach(element => {
            element.classList.remove("active");
        });
        item.classList.add("active");
        temp = index;
    });
});

btn.addEventListener("click", () => {
    if (temp ==='') {
        alert("Plz select a Option");
    }
    input[temp]++;
    temp = '';
    oplist.forEach(element => {
        element.classList.remove("active");
    });
    let percentages = calculatePercentage(input);
    console.log(percentages);

    resultlist.forEach((element, index) => {
        element.innerHTML = percentages[index];
    });
})

function calculatePercentage(input) {
    const total = input.reduce((sum, value) => sum + value, 0);
    
    if (total === 0) {
        return ["0%", "0%", "0%", "0%"];
    }

    return input.map(vote => Math.round((vote / total) * 100) + "%");
}

