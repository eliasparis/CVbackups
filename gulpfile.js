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
    connect = require('gulp-connect'),
    angularFilesort = require('gulp-angular-filesort'),
    watch = require('gulp-watch');

/*
* Sources paths
*/
var paths = {
    scripts_app : 'dev/app/**/**/**/*.js',
    styles_app : 'dev/app/**/**/**/*.css',
    libs : 'dev/assets/libs/*.js',
    styles : 'dev/assets/css/*.css',
    index : 'dev/index.html',
    root: 'dev',
};

/*
* 
* Server and development enviroment tasks
* Injects styles and scripts on index [inject]
* Watches for changes [watch] and if so, it [reloads]
* Starts a server on 8888 
*/
gulp.task('serve', ['inject', 'watch'] , function() {
  connect.server({
    port: 9999,
    root: paths.root,
    livereload: true
  });
})

gulp.task('inject', function() {
    var target = gulp.src(paths.index); 
    var sources = gulp.src([paths.libs , paths.scripts_app , paths.styles , paths.styles_app])
                      .pipe(angularFilesort());
 
    return target.pipe(inject(sources, {relative: true}))
                 .pipe(gulp.dest(paths.root));
});

gulp.task('watch', function() {
    gulp.watch([paths.libs , paths.scripts_app , paths.styles , paths.styles_app], ['reload'])
});

gulp.task('reload', function(){
    gulp.src(paths.index)
        .pipe(connect.reload());
});


/*
*Default task
*/
gulp.task('default', ['serve']);





