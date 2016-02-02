var src = 'src/main/webapp/';
var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	uncss = require('gulp-uncss'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css');
 
gulp.task('css', function () {
  return gulp.src(src + 'styles/*.css')
    .pipe(concatCss('main.css'))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(src + 'dist/styles/'))
    .pipe(notify('Done!'));
});

gulp.task('un-css', function () {
    return gulp.src(src + 'styles/*.css')
        .pipe(uncss({
            html: [src + 'index.html', src + 'template/*.html']
        }))
        .pipe(gulp.dest(src + 'fix/css'))
        .pipe(notify('Fixed!'));
});

gulp.task('watch', function () {
    gulp.watch(src + 'styles/*.css', ['css'])
});
