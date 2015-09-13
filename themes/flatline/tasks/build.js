var gulp = require("gulp");
var reload = require("browser-sync").reload;

gulp.task('build:content', ['hugo:draft'], reload);

gulp.task('build:all', ['revision', 'hugo:all']);

gulp.task('build:publish', ['hugo:publish']);
