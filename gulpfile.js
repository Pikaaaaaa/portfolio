var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    minifyCss = require('gulp-minify-css'),
    cleanCSS = require('gulp-clean-css');



// Compile sass
gulp.task('sass', function () {
    gulp.src('styles/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(minifyCss())
        .pipe(gulp.dest('styles/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


// Browser Reload
gulp.task('browser-sync', function() {  
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('minJs'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Default Tasks
gulp.task('default', ['sass', 'browser-sync', 'minify-js'], function () {
    gulp.watch('styles/**/*.scss', ['sass']);
    gulp.watch('js/*.js', ['minify-js']);
    gulp.watch('*.html', browserSync.reload);
});

gulp.task('server', ['build'], function(){
  browser.init({server: './_site', port: port});
});

// Run: gulp