var gulp = require('gulp');
var flatten = require('gulp-flatten');

gulp.task('copy:fonts:tmp', function() {
  return gulp.src('assets/fonts/*.{eot,svg,ttf,woff}')
    .pipe(flatten())
    .pipe(gulp.dest('.tmp/fonts'));
});

gulp.task('copy:fonts:dev', function() {
  return gulp.src('assets/fonts/*.{eot,svg,ttf,woff}')
    .pipe(flatten())
    .pipe(gulp.dest('./static/fonts'));
});

gulp.task('copy:styles:dev', function() {
  return gulp.src('.tmp/css/**/*.css')
    .pipe(flatten())
    .pipe(gulp.dest('./static/css'));
});

gulp.task('copy:scripts:dev', function() {
  return gulp.src('.tmp/js/**/*.js')
    .pipe(flatten())
    .pipe(gulp.dest('./static/js'));
});

gulp.task('copy:images:dev', function() {
  return gulp.src('.tmp/img/**/*.*')
    .pipe(flatten())
    .pipe(gulp.dest('./static/img'));
});

gulp.task('copy:svg:dev', function() {
  return gulp.src('.tmp/svg/**/*.svg')
    .pipe(flatten())
    .pipe(gulp.dest('./static/js'));
});

gulp.task('copy:layouts:dev', function() {
  return gulp.src('./assets/layouts/**/*.html')
    .pipe(gulp.dest('./layouts'));
});