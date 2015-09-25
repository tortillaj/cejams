var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

gulp.task('svg', function () {
  return gulp.src('assets/svg/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('.tmp/img'));
});