const gulp = require('gulp');

gulp.task('hello', function(callback){
    console.log("Hello");
    callback();
});

gulp.task('clone', function() {
    return gulp.src('app/**/*.*')
    .pipe(gulp.dest('public/'));
});
