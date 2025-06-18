const mainContainer = document.querySelector(".container");
const imageList = document.querySelectorAll(".image-container img");
const dotList = document.querySelectorAll(".dot-container button");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let imglist, dotlist;

let count = 0;
const load = () => {
    return new Promise((resolve) => {
        imageList.forEach(element => {
            element.classList.remove("active")
        });
        dotList.forEach(element => {
            element.classList.remove("btn-active")
        });
        resolve();
    })
}
dotList.forEach((element, index) => {
    element.addEventListener("click", () => {
        load().then(() => {
            count = index;
            imageList[count].classList.add("active");
            dotList[count].classList.add("btn-active");
            auto();
        })
    })
});

prevBtn.addEventListener("click", () => {
    count -= 1;
    if (count < 0) count = imageList.length - 1;
    load().then(() => {
        imageList[count].classList.add("active");
        dotList[count].classList.add("btn-active");
        auto();
    });
})

nextBtn.addEventListener("click", () => {
    count += 1;
    if (count > imageList.length - 1) count = 0;
    load().then(() => {
        imageList[count].classList.add("active");
        dotList[count].classList.add("btn-active");
        auto();
    });
})
let intervalId;

const auto = () => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        count += 1;
        if (count > 3) count = 0;
        load().then(() => {
            imageList[count].classList.add("active");
            dotList[count].classList.add("btn-active");
        });
    }, 2000);
};

auto();