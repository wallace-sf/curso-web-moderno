const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', /* ['antes1', 'antes2'],  */() => {
    return gulp.src(['pastaA/**/*.txt'])
                // .pipe(transformacao1())
                // .pipe(transformacao2())
                .pipe(gulp.dest('pastaB'))
})

gulp.task('fim', () => {
    console.log('Fim')
})