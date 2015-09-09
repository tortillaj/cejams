var gulp = require('gulp');
var exec = require('child_process').execSync;
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');

function hugo(drafts) {
    var root = path.join(process.cwd(), '../../');
    var dst = path.join(process.cwd(), '../../public');

    gutil.log('root: ' + root + ' dist: ' + dst);

    var cmd = 'hugo --config=../../config.toml -t flatline -s ' + root + ' -d ' + dst;
    if (drafts) {
        cmd += ' --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/" ';
    }

    var result = exec(cmd, {encoding: 'utf-8'});
    gutil.log('hugo: \n' + result);
}

gulp.task('hugo:draft', function() {
    hugo(true);
});

gulp.task('hugo:all', ['revision'], function() {
    hugo(true);
});

gulp.task('hugo:delete', function() {
    var dst = path.join(process.cwd(), '../../public');
    del.sync(dst);
});

gulp.task('hugo:live', ['hugo:delete', 'revision'], function() {
    hugo(false);
});
