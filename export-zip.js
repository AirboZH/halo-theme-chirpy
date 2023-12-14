const fs = require('fs');
const archiver = require('archiver');

const homedir = __dirname;

//const timeString = new Date().toLocaleDateString().replace(/\//g, '-'); // 日期充当hash值防止覆盖之前的压缩包

const output = fs.createWriteStream(homedir + '/halo-theme-chirpy.zip');
const archive = archiver('zip', {
  zlib: {level: 9} // 设置压缩级别
});

archive.on('error', function (err) {
  throw err;
});

output.on('close', function () {
  console.log(`
     --------- ---------压缩完毕--------- ---------
        ${homedir}\\halo-theme-chirpy.zip - ${(archive.pointer() / 1024 / 1024).toFixed(1)}MB
     --------- -------------------------- ---------
     `);
});

archive.pipe(output);
archive.directory('i18n/', true);
archive.directory('templates/', true);
archive.file('settings.yaml', {name: 'settings.yaml'});
archive.file('theme.yaml', {name: 'theme.yaml'});
archive.finalize();
