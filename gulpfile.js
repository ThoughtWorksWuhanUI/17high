var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('bundle', function () {
	return gulp.src('src/index.jsx')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('public/'));
});