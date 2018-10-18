const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');

gulp.task('babel', function(){
  return gulp.src('./src/**/*.js')
    .pipe(plumber())
    .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest('./lib'))
})

gulp.task('copy-resource', function() {
  gulp.src('./src/**/*.css').pipe(gulp.dest('./lib'));
});

gulp.task('default', ['babel', 'copy-resource']);