const imageList = ['images/background-image-0.jpg',
                            'images/background-image-1.jpg',
                            'images/background-image-2.jpg',
                            'images/background-image-3.jpg'];

let slideIndex = 0;
let backgroundImage = document.getElementById("backgroundImage");

window.setInterval(changeImageByTime, 3000);

document.getElementById("leftSlide").addEventListener("click", previousSlide);
document.getElementById("rightSlide").addEventListener("click", nextSlide);

console.log(-1%4);

function changeImageByTime() {
    if (slideIndex >= imageList.length) {
        slideIndex = 0;
    }
    backgroundImage.style.backgroundImage = `url('${imageList[slideIndex]}')`;
    slideIndex++;
}

function changeImage() {
    if (slideIndex >= imageList.length) {
        slideIndex = 0;
    }
    backgroundImage.style.backgroundImage = `url('${imageList[slideIndex]}')`;
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= imageList.length) {
        slideIndex = 0;
    }
    changeImage()
}

function previousSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = imageList.length - 1;
    }

    changeImage()
}

