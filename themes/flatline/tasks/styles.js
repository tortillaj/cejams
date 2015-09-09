var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

gulp.task('styles', function() {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(minifycss({advanced:false}))
        .pipe(gulp.dest('./.tmp/css'));
});
