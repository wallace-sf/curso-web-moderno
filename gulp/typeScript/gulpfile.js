const gulp = require('gulp')
// const concat = require('gulp-concat')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    tsProject.src()
        .pipe(tsProject())
        .pipe(babel({
            comments: false,
            presets: ['env'],
            minified: true
        }))
        // .pipe(concat('codigo.min.js'))
        // .on('error', (err) => { console.log(err)} )
        .pipe(gulp.dest('build'))
})