const fs = require('fs');
const archiver = require('archiver');

const homedir = __dirname;
const mode = process.env.NODE_ENV || 'dev';

//const timeString = new Date().toLocaleDateString().replace(/\//g, '-'); // 日期充当hash值防止覆盖之前的压缩包

const outputName = mode === 'prod' ? 'halo-theme-chirpy.zip' : 'halo-theme-chirpy-dev.zip';
const output = fs.createWriteStream(homedir + '/' + outputName);
const archive = archiver('zip', {
  zlib: {level: 9} // 设置压缩级别
});

archive.on('error', function (err) {
  throw err;
});

output.on('close', function () {
  console.log(`
     --------- ---------压缩完毕--------- ---------
        ${homedir}\\${outputName} - ${(archive.pointer() / 1024 / 1024).toFixed(1)}MB
     --------- -------------------------- ---------
     `);
});

archive.pipe(output);
archive.directory('i18n/', true);
archive.directory('templates/', true);
archive.file('settings.yaml', {name: 'settings.yaml'});
archive.file('annotation-setting.yaml', {name: 'annotation-setting.yaml'});
archive.file('theme.yaml', {name: 'theme.yaml'});
archive.finalize();
