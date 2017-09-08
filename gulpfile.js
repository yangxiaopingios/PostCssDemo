/*
* @Author: yangxiooping
* @Date:   2017-09-08 15:35:06
* @Last Modified by:   yangxiooping
* @Last Modified time: 2017-09-08 15:42:38
*/

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('css', function () {
	var processors = [
	  autoprefixer,
	  cssnext,
	  precss
	];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});