const gulp = require('gulp'); // gulp
const sass = require('gulp-sass'); // gulp sass plugin
const browserSync = require('browser-sync').create(); // for localhost 
var reload = browserSync.reload;  // for reload 

gulp.task('sass', () => {
    return gulp.src('./style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./style.css'))
});

gulp.task('default', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch(['./style.scss', './index.html'], gulp.series('sass'))
        .on('change', reload);
})