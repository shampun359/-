// Выпадающий  цвет и поворот svg картинки
document.querySelector("#text_one").addEventListener('click', function(){  // находим  элемент  и  отслеживаем клик по нему
    document.querySelector('#secret_text_one').classList.toggle('no_sicret_text');  // добавляем/удаляем  исчезновениетекста
    document.querySelector('#img_secret').classList.toggle('img_secret');    // поворот картинки
});


// Изменение цвета svg картинки
let svg = document.querySelector('#text_one'); // находим элемент по которому отслеживаем наведение мыши

svg.addEventListener('mouseenter', function () {   // при наведение
    document.querySelector('#svg_ellipse').classList.add('css_ellipse_hover');
    document.querySelector('#svg_plus').classList.add('css_plus_hover');
});
svg.addEventListener('mouseleave', function () {   // при отведение
    document.querySelector('#svg_ellipse').classList.remove('css_ellipse_hover');
    document.querySelector('#svg_plus').classList.remove('css_plus_hover');
});


