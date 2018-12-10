'use strict';

var gulp  = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autopreffixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');

var options = {
    default_js_file:'./src/js/index.js',
    scripts:{
        src: './src/js/',
        dest:'./dist/js',
        watch: './src/js/**/*.js'
    },
    styles:{
        src: './src/sass/*.scss',
        dest:'./dist/css',
        watch: './src/sass/**/*.scss'
    }
}

gulp.task('watch', () => {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(options.styles.watch, ['sass']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);

});

gulp.task('sass', () => {
    return gulp.src(options.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autopreffixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(options.styles.dest))
        .pipe(browserSync.stream());
})

gulp.task('mincss', ['sass'], () => {
    return gulp.src("dist/css/**.css")
        .pipe(rename({suffix: ".min"}))
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());

})

gulp.task('dev', ['watch']);
gulp.task('prod', ['mincss']);