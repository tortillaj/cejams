var gulp        = require("gulp");
var browserSync = require("browser-sync");
var sequence    = require('run-sequence');

gulp.task('serve', ['hugo:all'], function() {
    browserSync({
        server: {
            baseDir: "../../public/"
        },
        open: 'local',
        browser: ['google chrome']
    });

    gulp.watch(['./layouts/**/*', '../../content/**/*', './archetypes/**/*', '../../config.toml', 'theme.toml'], ['hugo:draft'], browserSync.reload);
    gulp.watch(['assets/scss/*.scss', 'assets/js/*.js', 'assets/img/*.*', 'assets/svg/*.svg', 'assets/layouts/**/*.html'], function() {
    	sequence('revision:clean', 'revision:create', ['revision:layouts', 'revision:styles'], 'hugo:draft', browserSync.reload);
    });
});
