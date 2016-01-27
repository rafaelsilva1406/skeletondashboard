var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');
gulp.task('sass', function() {
    //Grabs the file
    return sass('sass/style.sass')
        //saves it the dir
        .pipe(gulp.dest('public/css'))
});
gulp.task('browserify', function() {
    // Grabs the file
    return browserify('./app/main.js')
        // bundles it and creates a file 
        .bundle()
        .pipe(source('default.js'))
        // saves it the directory
        .pipe(gulp.dest('./public/js/'));
});
gulp.task('connect', function (){
    //grabs localhost settings attaches our dir to port
    connect.server({
        root: 'public',
        port: 4000
    });
});
gulp.task('watch', function() {
    //any changes made automate build
    gulp.watch('app/**/*.js', ['browserify']);
    gulp.watch('sass/style.sass', ['sass']);
})
//run custom tasks on gulp 
gulp.task('default', ['connect', 'watch']);