var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss") // här ska vi leta efter scss-filer (stjärnan kan vara vilket/vilka tecken som helst, bara det slutas med scss)
        .pipe(sass()) // styr om.
        .pipe(gulp.dest("app/css")) // var vår css ska hamna.
        .pipe(browserSync.stream()); // ladda om sidan på våran browser så att den drar nytta av de ändringarna i scss som gjorts. 
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./app/" // var den kommer leta efter filerna. 
    });

    gulp.watch("app/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));