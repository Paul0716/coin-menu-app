const path = require('path');
const menubar = require('menubar');

const mainWindow = menubar('./dist');

mainWindow.on("ready", function ready() {
  console.log("app is ready");
});
