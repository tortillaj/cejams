var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

gulp.task('images', function () {
  return gulp.src('assets/img/*.{gif,jpg,png}')
    .pipe(changed('.tmp/img'))
    .pipe(imagemin())
    .pipe(gulp.dest('.tmp/img'));
});
