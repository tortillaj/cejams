var gulp = require('gulp');
var exec = require('child_process').execSync;
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');
var sequence = require('run-sequence');

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

gulp.task('hugo:draft', function () {
  hugo(true);
});

gulp.task('hugo:all', ['revision'], function () {
  hugo(true);
});

gulp.task('hugo:delete', function () {
  var dst = path.join(process.cwd(), '../../public');
  del.sync(dst, {force:true});
});

gulp.task('hugo:live', ['hugo:delete'], function () {
  hugo(false);
});

gulp.task('hugo:dev', function() {
	sequence('revision', 'hugo:draft');
});

gulp.task('hugo:publish', function() {
  sequence('revision:clean', 'revision:create', ['revision:layouts', 'revision:styles'], 'hugo:live');
});