var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var sourcemap = require('gulp-sourcemaps');

gulp.task('scripts:dist', function () {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('.tmp/js'));
});

gulp.task('scripts:dev', function () {
  return gulp.src('assets/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
    .pipe(sourcemap.init({ preserveComments: 'all', compress: false }))
    .pipe(uglify())
    .pipe(sourcemap.write())
    .pipe(gulp.dest('../../public/js'));
});

gulp.task('scripts:tmp', function () {
  return gulp.src('assets/js/*.js')
    .pipe(sourcemap.init())
    .pipe(uglify())
    .pipe(sourcemap.write())
    .pipe(gulp.dest('.tmp/js'));
});