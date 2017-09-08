/*
* @Author: yangxiooping
* @Date:   2017-09-08 15:35:06
* @Last Modified by:   yangxiooping
* @Last Modified time: 2017-09-08 17:16:17
*/

// var gulp = require('gulp');
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
// var cssnext = require('cssnext');
// var precss = require('precss');

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var yxpplugin = require('postcss-yxpplugin');

gulp.task('css', function () {
	var processors = [
	  yxpplugin
	];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});