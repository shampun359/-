/*Бургер*/ 
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})



/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
    
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item"); /*Создаём массив из  элементов с item*/ 
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
    
}
