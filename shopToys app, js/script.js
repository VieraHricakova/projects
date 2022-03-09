const boxes = document.querySelectorAll(".box");
const carousel = document.getElementById("carousel");
const left = document.getElementById("left");
const right = document.getElementById("right");

const boxesLength = boxes.length;

let currentPicture = 0;

right.addEventListener("click", () => {
    currentPicture++;
    if(currentPicture > boxesLength-1){
        currentPicture = 0;
    }
    updateCarouse();
});

left.addEventListener("click", () => {
    currentPicture--;
    if(currentPicture < 0){
        currentPicture=boxesLength-1;
    }
    updateCarouse();
});

function updateCarouse() {
    carousel.style.transform = `translateX(${
        -currentPicture * boxes[0].offsetWidth
    }px)`;
}