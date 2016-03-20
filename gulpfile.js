/////////////////////////
////////////////////////
/* Gulpfile for CVBackups
        usage : 
        $ gulp serve   ---->   to work on Dev enviroment 
        $ gulp build   ---->   to see a production version
        $ gulp         ---->   will run the 'default' task which is the same as running $ gulp serve
*/
////////////////////////
////////////////////////

/*
* Dependencies
*/
var gulp = require('gulp'),
    inject = require('gulp-inject'),
    webserver = require('gulp-webserver'),
    angularFilesort = require('gulp-angular-filesort'),
    watch = require('gulp-watch');

/*
* Sources paths
*/
var paths = {
    scripts_app : 'dev/app/**/**/**/*.js',
    styles_app : 'dev/app/**/**/**/*.css',
    libs : 'bower_components/**/*.min.js',
    styles : 'dev/assets/css/*.css',
    index : 'dev/index.html',
    dev_root : 'dev/',
    root: '',
};

/*
* 
* Server and development enviroment tasks
* Injects styles and scripts on index [inject]
* Starts a server on 8888 
*/
gulp.task('serve', ['inject'] , function() {
    gulp.src(paths.root)
        .pipe(webserver({
          livereload: {enable: true,},
          open: true
        }));
});

gulp.task('inject', function() {
    var target = gulp.src(paths.index); 
    var sources = gulp.src([paths.libs , paths.scripts_app , paths.styles , paths.styles_app]);
 
    return target.pipe(inject(sources, {relative: true}))
                 .pipe(gulp.dest(paths.dev_root));
});

/*
*Default task
*/
gulp.task('default', ['serve']);





