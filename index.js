// BACKGROUND CAROUSEL IMPLEMENTATION

const imageList = ['images/background-image-0.jpg', 'images/background-image-1.jpg', 'images/background-image-2.jpg', 'images/background-image-3.jpg'];

let slideIndex = 0;
let backgroundImage = document.getElementById("backgroundImage");

window.setInterval(changeImageByTime, 3000);

document.getElementById("leftSlide").addEventListener("click", previousSlide);
document.getElementById("rightSlide").addEventListener("click", nextSlide);

console.log(imageList[-1]);
console.log(-1 % 5);

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

// SLIDE MENU IMPLEMENTATION

let slideButton = document.getElementById("slideButton");
let slideMenu = document.getElementById("slideMenu");
let body = document.body;

slideButton.addEventListener("click", function () {
    slideMenu.style.display = "block";
    body.style.overflow = "hidden";
    body.style.maxHeight = "100%";
});

let closeMenuButton = document.getElementById("closeButton");
closeMenuButton.addEventListener("click", function () {
    slideMenu.style.display = "none";
    body.style.overflow = "auto";
    body.style.maxHeight = "none";
});

// DROP DOWN MENU IMPLEMENTATION

let dropDownButton = document.getElementById("dropDownButton");
let dropDownMenu = document.getElementById("dropDownMenu");

dropDownButton.addEventListener("click", function () {
    if (dropDownMenu.style.display === "none") {
        dropDownButton.style.outline = "2px solid orange";
        dropDownMenu.style.display = "block";
    } else {
        dropDownMenu.style.display = "none";
    }
});

const dropDownItems = document.querySelectorAll('.drop-down li');
let searchBar = document.getElementById('searchBar');
let transparentFrame = document.getElementById('transparentFrame');
let inputText = document.getElementById("inputText");

dropDownItems.forEach(function (item) {
    item.addEventListener('click', function () {
        dropDownButton.textContent = item.textContent.trim();
        searchBar.style.outline = "2px solid orange";
        transparentFrame.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        inputText.focus();
        dropDownMenu.style.display = "none";
        transparentFrame.style.zIndex = "1000";

    });
});

// CLOSE DROP DOWN MENU WHEN CLICKING OUTSIDE OF IT
document.addEventListener("click", function (event) {
    if (event.target === transparentFrame) {
        dropDownMenu.style.display = "none";
        transparentFrame.style.backgroundColor = "rgba(0, 0, 0, 0)";
        transparentFrame.style.zIndex = "-1";
    }
});

// CLOSE SLIDE MENU WHEN CLICKING OUTSIDE OF IT
document.addEventListener("click", function (event) {
    if (event.target === slideMenu) {
        slideMenu.style.display = "none";
    }
});
