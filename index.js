const path = require('path');
const menubar = require('menubar');

// console.log(path.resolve("./dist", "icon.png"));

const mb = menubar({
  dir: path.resolve("./"),
  icon: path.resolve("./", "icon.png"),
});

mb.on("ready", function ready() {
  console.log("app is ready");
});
