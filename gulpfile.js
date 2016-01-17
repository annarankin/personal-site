var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('lint', function() {
  return gulp.src('src/js/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
             .pipe(concat('main.js'))
             .pipe(uglify())
             .pipe(gulp.dest('public/js'));
});

gulp.task('css', function() {
  return gulp.src('src/css/*.css')
             .pipe(concat('style.css'))
             // .pipe(minifyCss())
             .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/css/*.css', ['css']);
});

gulp.task('default', ['lint', 'scripts', 'css', 'watch']);