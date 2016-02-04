var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    bower = require('gulp-bower'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    config = {
        bowerDir: './bower_components',
        bootstrapDir: './bower_components/bootstrap-sass',
        fontAwesome: './bower_components/font-awesome',
        scss: './scss',
        publicDir: './public'
    };
gulp.task('bower',function(){
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});
gulp.task('scss', function() {
    //Grabs the file
    return gulp.src(config.scss+'/*.scss')
        .pipe(sass({
            errLogToConsole: true,
            includePaths :[
                config.bootstrapDir+'/assets/stylesheets',
                config.fontAwesome+'/scss'
            ],
            outputStyle: 'compressed'  
        }))
        .pipe(gulp.dest(config.publicDir+'/css'));
});
gulp.task('fonts', function(){
    return gulp.src(config.fontAwesome+'/fonts/**.*')
    .pipe(gulp.dest(config.publicDir+'/fonts'));
});
gulp.task('browserify', function() {
    var b = browserify({entries:'./app/main.js'});
    // Grabs the file
    return b.bundle() 
        //.pipe(concat(config.bowerDir+'/jquery/dist/jquery.min.js'))
        .pipe(source('default.js'))
        // saves it the directory
        .pipe(gulp.dest(config.publicDir+'/js'))
        on('error',function(error){
            console.log(error.message);
        });
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
    gulp.watch(config.scss+'/**/*.scss', ['scss']);
})
//run custom tasks on gulp 
gulp.task('default', ['connect','bower','watch','fonts']);