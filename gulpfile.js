var gulp = require('gulp');
var gulpTslint = require("gulp-tslint");
var tslint = require("tslint");
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject("tsconfig.json");

var tslintFunction = function () {
  var program = tslint.Linter.createProgram("./tsconfig.json");
  gulp.src('src/**/*.ts')
    .pipe(gulpTslint({ program }))
    .pipe(gulpTslint.report({ emitError: false }));
};
var buildFunction = function () {
  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"));
};

gulp.task('tslint',tslintFunction);
gulp.task("build", buildFunction);
gulp.task('watch-tslint',function () {gulp.watch('src/**/*.ts', ['tslint']);});