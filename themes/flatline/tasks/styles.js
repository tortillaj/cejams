var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var sourcemap = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('styles:dist', function () {
  return gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(minifycss({advanced: false}))
    .pipe(gulp.dest('./.tmp/css'));
});

gulp.task('styles:dev', function () {
  return gulp.src('assets/scss/*.scss')
    .pipe(sourcemap.init())
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemap.write())
    .pipe(gulp.dest('../../public/css'))
    .pipe(browserSync.stream());
});

gulp.task('styles:tmp', function () {
  return gulp.src('assets/scss/*.scss')
    .pipe(sourcemap.init())
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemap.write())
    .pipe(gulp.dest('./.tmp/css'));
});