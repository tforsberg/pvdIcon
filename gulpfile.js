// Load all plugins from pkg.json
var gulp = require( "gulp" );
var $ = require( "gulp-load-plugins" )(  );

var config = {
  "css": {
    "src": ["./src/*.scss"],
    "dest": "./build/"
  },
  "js": {
    "src": ["./src/*.coffee"],
    "dest": "./build/"
  }
};

gulp.task( "css", function(){
  gulp.src( config.css.src )
    .pipe( $.sass() )
    .pipe( $.rename( {extname: ".css"} ) )
    .pipe( gulp.dest( config.css.dest ) )
    .pipe( $.minifyCss() )
    .pipe( $.rename( {suffix: ".min"} ) )
    .pipe( gulp.dest( config.css.dest ) );
});

gulp.task( "js", function(){
  gulp.src( config.js.src )
    .pipe( $.coffee() )
    .pipe( $.rename( {extname: ".js"} ) )
    .pipe( $.ngmin() )
    .pipe( gulp.dest( config.js.dest ) )
    .pipe( $.uglify() )
    .pipe( $.rename( {suffix: ".min"} ) )
    .pipe( gulp.dest( config.js.dest ) );
});

gulp.task( "default", ["css","js"] );

gulp.task( "watch", ["default"], function(){
  gulp.watch( config.css.src, ["css"] );
  gulp.watch( config.js.src, ["js"] );
});
