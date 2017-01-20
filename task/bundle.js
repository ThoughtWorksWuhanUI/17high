const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfig = require('../webpack.config.js');

gulp.task('bundle', () =>
  gulp.src('../src/index.jsx')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('./public/')));
