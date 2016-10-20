var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglifyjs');

gulp.task('sass', function() {
	return gulp.src('app/sass/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: '../Part 1/app/'
		},
		notify: false
	});
});

gulp.task('scripts', function() {
	return gulp.src('app/js/parts/*.js')
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function() {
	gulp.watch('app/sass/parts/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

var path = {
    build: { 
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: {
        html: 'app/*.html', 
        js: 'app/js/*.js',
        style: 'app/css/*.css',
        img: 'app/img/*.*', 
        fonts: 'app/fonts/*.*'
    },
    clean: './build'
};

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        .pipe(gulp.dest(path.build.html))
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(uglify()) 
        .pipe(gulp.dest(path.build.js)) 
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(gulp.dest(path.build.css))
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img)) 
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);
