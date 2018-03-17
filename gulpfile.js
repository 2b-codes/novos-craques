const gulp = require("gulp");
const rename = require("gulp-rename");
const stylus = require("gulp-stylus");
const clean = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss")
const mmq = require("gulp-merge-media-queries");
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");

const env = process.env.NODE_ENV || "local";

gulp.task("default", ["style"], () => {
	if(env == "local") gulp.watch("stylesheets/**/*", ["style"]);
});

gulp.task("style", () => {
	return gulp.src("stylesheets/index.styl")
	.pipe(plumber())
	.pipe(sourcemaps.init())
		.pipe(stylus({compress: true, "include css": true}))
		.pipe(postcss([ autoprefixer() ]))
		.pipe(mmq())
		.pipe(clean())
		.pipe(rename("bundle.min.css"))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("public/build"))
});