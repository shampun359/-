const gulp = require('gulp');   /*Подключаем галп*/ 
const cleanCSS = require('gulp-clean-css');  /*Плагин для минификации*/ 

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

  gulp.task('minifyJS', function() {
    return pipeline(
          gulp.src('app/js/*.js'),
          uglify(),
          gulp.dest('public/js/')
    );
  });