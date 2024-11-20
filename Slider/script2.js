const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active'); 
        } else {
            slide.classList.remove('active'); 
        }
    });
}
function slidePrevious() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}
function slideNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}
document.getElementById('anterior').addEventListener('click', slidePrevious);
document.getElementById('siguiente').addEventListener('click', slideNext);
showSlide(currentIndex);

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
});