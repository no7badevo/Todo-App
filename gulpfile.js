'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var jade  = require('gulp-jade');
var beautify = require('gulp-beautify');


gulp.task("default", function () {
  console.log('Serve');
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('jade', function() {
    return gulp.src('*.jade')
        .pipe(jade({
        pretty: true
    })) 
        .pipe(gulp.dest('./app'))
});

gulp.task('beautify', function () {
    gulp.src('js/*.js')
        .pipe(beautify({indent_size: 2}))
        .pipe(gulp.dest('./app/js'))
});