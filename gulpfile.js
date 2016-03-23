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
    series = require('stream-series'),
    watch = require('gulp-watch');

/*
* Sources paths
*/
var paths = {
    scripts_app : 'dev/app/**/**/**/*.js',
    styles_app : 'dev/app/**/**/**/*.css',
    libs : 'bower_components/**/*.min.js',
    dev_libs : 'dev/assets/libs/*.min.js',
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
gulp.task('serve', ['libs_manage','inject'] , function() {
    gulp.src(paths.dev_root)
        .pipe(webserver({
          livereload: {enable: true,},
          open: true
        }));
});

gulp.task('libs_manage', function(){
    gulp.src([
            'bower_components/angular-messages/*.min.js',
            'bower_components/angular-ui-router/release/*.min.js',
            'bower_components/angular/*.min.js',
            ]).pipe(gulp.dest('dev/assets/libs'));
});

gulp.task('inject', function() {
    var target = gulp.src(paths.index); 
    var sources = gulp.src([paths.scripts_app , paths.styles , paths.styles_app], {read: false});
    var sources2 = gulp.src([paths.dev_libs]).pipe(angularFilesort());
 
    return target.pipe(inject(series(sources2, sources), {relative: true}))
                 .pipe(gulp.dest(paths.dev_root));
});

/*
*Default task
*/
gulp.task('default', ['serve']);





