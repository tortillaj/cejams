var gulp = require("gulp");
var reload = require("browser-sync").reload;

gulp.task('build:content', ['revision', 'hugo:draft'], reload);

gulp.task('build:all', ['revision', 'hugo:all'], reload);

gulp.task('build:publish', ['revision', 'hugo:live']);
