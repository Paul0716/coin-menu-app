const path = require('path');
const packager = require('electron-packager');
const createDMG = require('electron-installer-dmg')
const rootPath = path.resolve("./");

const packagerPromise = packager({
        dir: './',
        arch: 'x64',
        platform: 'darwin',
        name: 'CoinMenu',
        overwrite: true,
        out: `${rootPath}/output`,
        // tmpdir: path.resolve('./tmp'),
        /* osx / mac store app only */
        appBundleId: 'com.paultaku.coinmenu',
        appCategoryType: 'public.app-category.finance'
    });

packagerPromise.then(appPaths => {
  // console.log(path.resolve(appPaths[0], "CoinMenu.app"));
  for(const appPath of appPaths) {
    createDMG(
      {
        appPath: path.resolve(appPath, "CoinMenu.app"),
        name: "CoinMenu",
        overwrite: true,
        icon: path.resolve("./icon.png"),
        out: appPath,
      },
      function done(err) {
        if (err) {
          console.error(err);
        }
      }
    );
  }
  
});