var gulp = require('gulp');
var flatten = require('gulp-flatten');

gulp.task('copy:fonts', function() {
  return gulp.src('assets/fonts/*.{eot,svg,ttf,woff}')
    .pipe(flatten())
    .pipe(gulp.dest('.tmp/fonts'));
});