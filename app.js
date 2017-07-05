var bs = require("browser-sync").create();

bs.watch(['dist/*.*', 'dist/*.scss']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./dist"
});