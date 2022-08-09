const slideContainer = document.querySelector(".all-sliders");
const intervaltTime = 8000;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const auto = true;
let slideInterval;

// Next Slide
const nextSlide = () => {
    const current = document.querySelector(".current");
    const newSlide = current.nextElementSibling;
    current.classList.remove("current");
    if (newSlide !== null) {
        newSlide.classList.add("current");
    } else {
        slideContainer.firstElementChild.classList.add("current");
    }
}


// Previous Slide
const prevSlide = () => {
    const current = document.querySelector(".current");
    const newSlide = current.previousElementSibling;
    current.classList.remove("current");
    if (newSlide !== null) {
        newSlide.classList.add("current");
    } else {
        slideContainer.lastElementChild.classList.add("current");
    }
}


prev.addEventListener("click", () => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(prevSlide, intervaltTime);
    }
});

next.addEventListener("click", () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervaltTime);
    }
});

if (auto) {
    slideInterval = setInterval(nextSlide, intervaltTime);
}

