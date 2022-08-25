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


// Выпадающий  цвет и поворот svg картинки

function lunge(enter) { 
    document.querySelector('#secret_text_' + enter).classList.toggle('no_sicret_text'); // добавляем/удаляем исчезновение текста
    document.querySelector('#img_secret_' + enter).classList.toggle('img_secret');   // поворот картинки
}

function hooked(i) {// Меняем цвет картинки  при наведение
    document.querySelector('#svg_ellipse_' + i).classList.add('css_ellipse_hover');
    document.querySelector('#svg_plus_' + i).classList.add('css_plus_hover');
}

function distracted(i) {// Меняем цвет картинки  при отведение
    document.querySelector('#svg_ellipse_' + i).classList.remove('css_ellipse_hover');
    document.querySelector('#svg_plus_' + i).classList.remove('css_plus_hover');
}


