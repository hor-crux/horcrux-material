var gulp = require('gulp');
var paths = require('../paths');
var packagejson = require('../../package.json');
var sass = require("gulp-sass");
var replace = require("gulp-replace");
var rename = require("gulp-rename");


gulp.task('build:sass', ['clean'], function() {
  gulp.src(paths.source + '/' + packagejson.name + '.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(paths.output));
});

gulp.task('build:shim', ['clean'], function() {
  gulp.src(paths.source + '/' + packagejson.name + '.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(replace(/\*\s*\/deep\/\s*/gm, ''))
  .pipe(rename(function (path) {
    path.basename += "-shimmed";
  }))
  .pipe(gulp.dest(paths.output));
});

gulp.task('build:css', ['build:sass', 'build:shim'], function() {});

gulp.task('build:js', ['clean'], function() {
  gulp.src(paths.source + '/' + packagejson.name + '.js')
  .pipe(gulp.dest(paths.output));
});

gulp.task('build', ['build:css', 'build:js'], function() {
});