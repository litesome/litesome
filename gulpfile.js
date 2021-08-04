var gulp = require("gulp"),
  less = require("gulp-less"),
  path = require("path"),
  cleanCSS = require("gulp-clean-css"),
  autoprefixer = require("gulp-autoprefixer"),
  cssmin = require("gulp-cssmin"),
  rename = require("gulp-rename"),
  srcfile = "./src/styles/styles.less",
  output = "./public/litesome@1.0.0/css"

gulp.task("minify", function () {
  return gulp
    .src(srcfile)
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(cssmin())
    .pipe(rename("litesome.min.css"))
    .pipe(gulp.dest(output))
});
gulp.task("less", function () {
  return gulp
    .src(srcfile)
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")],
      })
    )
    .pipe(gulp.dest(output));
});
