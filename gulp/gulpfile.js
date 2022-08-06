const { series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass') (require('node-sass'))
const reload = browserSync.reload

function tarefasCSS(cb) {
    gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css', 
            './vendor/owl/css/owl.css',
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'
        ])
        .pipe(concat('libs.css'))             // mescla arquivos
        .pipe(cssmin())                      // minifica o CSS
        .pipe(rename({ suffix: '.min'}))     // libs.min.css
        .pipe(gulp.dest('./dist/css'))      // cria arquivo em um novo diretório
    cb()
}

function tarefasSASS(cb) {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass())       // transforma o SASS para CSS
        .pipe(gulp.dest('./dist/css'))

    cb()
} 

function tarefasJS(callback) {
    gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/js/owl.js',
        './vendor/jQuery-Mask-Plugin-master/dist/jquery.mask.js',
        //'./vendor/jquery-ui/jquery-ui.js',
        './src/js/customizado.js'
        ])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'})) // libs.min.js
        .pipe(gulp.dest('./dist/js'))
    return(callback)
}

function tarefasImagem() {
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

// POC - Proof of Concept
function tarefasHTML(callback) {
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))

    return callback()
}

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('src/**/*').on('change', process)
    gulp.watch('src/**/*').on('change', reload)
})

function end(cb){
    console.log("Tarefa finalizada")
    return cb()
}

const process = parallel( tarefasHTML, tarefasCSS, tarefasSASS, end )
exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.sass = tarefasSASS
exports.default = process