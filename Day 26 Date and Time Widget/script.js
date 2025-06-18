let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const time = () => {
    const now = new Date(); 
    hoursContainer.innerHTML = `${now.getHours()} :`;
    minutesContainer.innerHTML = `${now.getMinutes()} :`
    secondsContainer.innerHTML = `${now.getSeconds()}`
    dateContainer.innerHTML = now.toDateString();

    const date = now.getDate();
    const month = monthNames[now.getMonth() + 1];
    const day = weekdays[now.getDay()];
    dateContainer.innerHTML = ` <p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;   

} 

//Tue May 20 2025 04:17:37 GMT+0600 (Bangladesh Standard Time)
// console.log(now.toDateString());   // e.g., "Mon May 19 2025"
// console.log(now.toTimeString());   // e.g., "14:45:12 GMT+0000 (UTC)"
// console.log(now.getFullYear());    // e.g., 2025
// console.log(now.getMonth() + 1);   // Month (0-11), so +1 for human-readable
// // console.log(now.getDate());         // Day of the month
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();

setInterval(() => {
    time();
}, 1000);