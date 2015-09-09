var gulp = require('gulp');
var rev = require('gulp-rev');
var del = require('rev-del');
var path = require('path');
var replace = require("gulp-rev-replace");
var size = require('gulp-size');

gulp.task('revision:create', ['styles', 'scripts', 'images', 'svg', 'copy:fonts'], function() {
    return gulp.src(['.tmp/css/*.css', '.tmp/js/*.js', '.tmp/img/*.*', '.tmp/svg/*.svg', '.tmp/fonts/*.{eot,svg,ttf,woff}'], {base: path.join(process.cwd(), '.tmp')})
        .pipe(rev())
        .pipe(gulp.dest('static'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('static'));
});

gulp.task('revision:layouts', function() {
    var manifest = gulp.src('./static/rev-manifest.json');

    return gulp.src('./assets/layouts/**/*.html')
      .pipe(replace({manifest: manifest, replaceInExtensions: ['.html']}))
      .pipe(size())
      .pipe(gulp.dest('./layouts'));
});

gulp.task('revision:styles', function() {
  var manifest = gulp.src('./static/rev-manifest.json');

  return gulp.src('./static/css/*.css')
    .pipe(replace({manifest: manifest, replaceInExtensions: ['.css']}))
    .pipe(size())
    .pipe(gulp.dest('./static/css'));
});

gulp.task('revision', ['revision:create', 'revision:layouts', 'revision:styles']);