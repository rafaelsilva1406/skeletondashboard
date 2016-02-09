var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    config = {
        domain: 'angularjs.dev',
        devPort: 4000,
        baseDir: './src',
        bowerDir: './bower_components',
        bootstrapDir: './bower_components/bootstrap-sass',
        fontAwesome: './bower_components/font-awesome',
        js: './src/app',
        scss: './src/scss',
        publicDir: './public'
    };
//Bower Tasks
gulp.task('bower',function(){
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});
//Jshint Tasks
gulp.task('jsCheck',function(){
    gulp.src(config.baseDir+'app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
//Html Tasks
gulp.task('html',function(){
    gulp.src(config.publicDir+'/**/*.html');
});
//Sass Tasks
gulp.task('scss', function() {
    return gulp.src(config.scss+'/*.scss')
        .pipe(sass({
            errLogToConsole: true,
            includePaths :[
                config.bootstrapDir+'/assets/stylesheets',
                config.fontAwesome+'/scss'
            ],
            outputStyle: 'compressed'  
        }))
        .pipe(gulp.dest(config.publicDir+'/css'))
});
//Font Tasks
gulp.task('fonts', function(){
    return gulp.src(config.fontAwesome+'/fonts/**.*')
    .pipe(gulp.dest(config.publicDir+'/fonts'));
});
//Js Tasks
gulp.task('browserify', function() {
    gulp.src([config.js+'/main.js']) 
        .pipe(browserify({
            insertGlobals:true,
            debug:true
        }))
        .pipe(concat('default.js'))
        .pipe(gulp.dest(config.publicDir+'/js'));
});
//Server Tasks
gulp.task('devConnect', function (){
    connect.server({
        root: config.publicDir.substr(2),
        port: config.devPort
    });
});
//Watch Tasks
gulp.task('watch', function() {
    gulp.watch(config.js+'/**/*.js', ['browserify']);
    gulp.watch(config.scss+'/**/*.scss', ['scss']);
    gulp.watch(config.publicDir+'/**/*.html',['html']);
});
//Default Tasks
gulp.task('default', ['jsCheck','devConnect','bower','watch','fonts']);