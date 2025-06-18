const sampleTexts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Pellentesque habitant morbi tristique senectus et netus.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  "Integer nec odio. Praesent libero. Sed cursus ante dapibus.",
  "Curabitur blandit tempus porttitor. Integer posuere erat a ante.",
  "Vestibulum id ligula porta felis euismod semper.",
  "Aenean lacinia bibendum nulla sed consectetur.",
];

const btn = document.getElementById("btn");
const itemsInput = document.getElementById("items");
const dataContainer = document.getElementById("data");

btn.addEventListener("click", () => {
  dataContainer.innerHTML = "";
  const num = parseInt(itemsInput.value);
  if(num < 1){
    alert("Num can't be zero or less");
    return;
  }
  if (num > sampleTexts.length) {
    alert(`You can generate at most ${sampleTexts.length} unique paragraphs.`);
    return;
  }if (num > sampleTexts.length) {
    alert(`You can generate at most ${sampleTexts.length} unique paragraphs.`);
    return;
  }

    const shuffled = [...sampleTexts].sort(() => Math.random() - 0.5);
    const random = shuffled.slice(0,num);

  random.forEach(element => {
    const para = document.createElement("p");
    para.textContent = element;
    dataContainer.appendChild(para);
  })
  itemsInput.value = "";
});
