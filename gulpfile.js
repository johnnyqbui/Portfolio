const gulp = require('gulp')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-cssnano')

gulp.task('minifyCss', () => {
 	return gulp.src('./styles/sass/stylesheet.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./styles'))
})

gulp.task('minifyCss:watch', function() {
	gulp.watch ('./styles/sass/stylesheet.scss', ['minifyCss'])
})

gulp.task('default', ['minifyCss', 'minifyCss:watch'])

