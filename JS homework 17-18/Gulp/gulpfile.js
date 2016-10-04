var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('concat-css', function () {
	return gulp.src('css/src/*.css')
	.pipe(concatCss("style.main.css"))
	.pipe(gulp.dest('css/dest/'));
	
});

gulp.task('concat-js', function() {
	return gulp.src(['js/src/*.js'])
	.pipe(concat('script.main.js'))
	.pipe(gulp.dest('js/dib'));
});


gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/dib/script.main.js'),
        uglify('script.min.js'),
        gulp.dest('js/dib/min')
    ],
    cb
  );
});

gulp.task('default', ['concat-js', 'concat-css', 'compress'], function() {
});