var gulp        = require("gulp");
var browserSync = require("browser-sync");

gulp.task('serve', ['build:all'], function() {
    // Serve files from the root of this project
    browserSync({
        server: {
            baseDir: "../../public/"
        },
        open: 'local',
        browser: ['google chrome']
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(['../../layouts/**/*', '../../content/**/*', '../../archetypes/**/*'], ['build:content']);
    gulp.watch(['assets/scss/*.scss', 'assets/js/*.js', 'assets/img/*.*', 'assets/svg/*.svg'], ['build:all']);
});
