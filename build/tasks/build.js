var gulp = require('gulp');
var paths = require('../paths');
var packagejson = require('../../package.json');
var sass = require("gulp-sass");


gulp.task('build:sass', ['clean'], function() {
  gulp.src(paths.source + '/' + packagejson.name + '.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(paths.output));
});

gulp.task('build:js', ['clean'], function() {
  gulp.src(paths.source + '/' + packagejson.name + '.js')
  .pipe(gulp.dest(paths.output));
});

gulp.task('build', ['build:sass', 'build:js'], function() {
});
