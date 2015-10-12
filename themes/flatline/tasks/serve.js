var gulp = require("gulp");
var browserSync = require('browser-sync');
var sequence = require('run-sequence');

gulp.task('serve', ['serve:setup'], function () {
  browserSync({
    server: {
      baseDir: "../../public/"
    },
    open: 'local',
    browser: ['google chrome']
  });

  gulp.watch(['./layouts/**/*', '../../content/**/*', './archetypes/**/*', '../../config.toml', 'theme.toml']).on('change', function() { return sequence('hugo:draft', browserSync.reload) });

  gulp.watch('assets/scss/**/*.scss', ['styles:dev', 'copy:styles:dev']);
  gulp.watch('assets/js/*.js').on('change', function() { return sequence('scripts:dev', 'copy:scripts:dev', 'hugo:draft', browserSync.reload); });
  gulp.watch('assets/img/*.*').on('change', function() { return sequence('images', 'copy:images:dev', 'hugo:draft', browserSync.reload); });
  gulp.watch('assets/svg/*.svg').on('change', function() { return sequence('svg', 'copy:svg:dev', 'hugo:draft', browserSync.reload); });
  gulp.watch('assets/layouts/**/*.html').on('change', function() { return sequence('copy:layouts:dev', 'hugo:draft', browserSync.reload); });
});

gulp.task('serve:setup', function () {
  sequence('revision:clean', ['styles:tmp', 'scripts:tmp', 'images', 'svg'], ['copy:styles:dev', 'copy:scripts:dev', 'copy:fonts:dev', 'copy:images:dev', 'copy:layouts:dev', 'copy:svg:dev'], 'hugo:draft');
});
