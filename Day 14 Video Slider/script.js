const video = document.getElementById('video');
const thumbnails = document.querySelectorAll('.thumbnail img');
let count = 0;

video.addEventListener("ended", () =>{
    count += 1;
    if(count >= thumbnails.length) {count = 0};
    play(count);
})

thumbnails.forEach((element, index) => {
    element.addEventListener("click", () => {
        play(index);
    })
});

const play = (index) => {
    count = index;
    video.src = `assests/videos/v${index + 1}.mp4`;
    video.play();

    thumbnails.forEach(el => {
        el.classList.remove("active");
    });
    thumbnails[index].classList.add("active");
}

