const gulp = require('gulp');   /*Подключаем галп*/ 
const cleanCSS = require('gulp-clean-css');  /*Плагин для минификации  CSS*/
const uglify = require('gulp-uglify'); /*Плагин для минификации  JS*/
var pipeline = require('readable-stream').pipeline; /*Плагин для минификации  JS (дополнительный)*/
const autoprefixer = require('gulp-autoprefixer'); /*авто префиксы*/

gulp.task('hello', function(callback){
    console.log("Hello");
    callback();
});

gulp.task('clone', function() { /*Копируем файлы из одной папки в другую*/ 
    return gulp.src('app/**/*.*')
    .pipe(gulp.dest('public/'));
});

gulp.task('minifyCSS', function() {   /*Минифицируем CSS*/ 
    return gulp.src('app/css/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('public/css/'));
  });

gulp.task('minifyJS', function() {  /*Минифицируем JS*/ 
  return pipeline(
    gulp.src('app/js/*.js'),
      uglify(),
      gulp.dest('public/js/')
  );
});

gulp.task('autoPrefixCSS', function() { /*Добавляем автопрефиксы в CSS*/ 
  return gulp.src('app/css/*.css')
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css/'));
});

