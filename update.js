'use strict';

var os = require('os'),
    fs = require('fs'),
    tmp = require('tmp'),
    Acho = require('acho'),
    path = require('path'),
    Download = require('download'),
    logger = new Acho({color: true});

var generateFileContent = function(data) {
  var content = "'use strict';";
  content += os.EOL;
  content += os.EOL;
  content += 'module.exports = ';
  content += data;
  content += ';';
  content += os.EOL;
  return content;
};

tmp.dir(function _tempDirCreated(err, tmpFolder, cleanup) {
  if (err) return logger.error(err);

  logger.info('Created temporal folder in '+ tmpFolder);
  logger.info('Downloading file...');

  new Download({mode: '755', extract: true})
  .get('https://github.com/arvida/emoji-cheat-sheet.com/archive/master.zip')
  .dest(tmpFolder)
  .run(function(err) {

    if (err) return logger.error(err);
    logger.info('File downloaded and extracted succesful.');

    var folder = fs.readdirSync(tmpFolder)[0],
        emojiDirectory = path.resolve(tmpFolder, folder, 'public/graphics/emojis');

    logger.info('Read the directory ' + emojiDirectory);

    fs.readdir(emojiDirectory, function(err, files) {
      logger.info('Generating emoji keywords');
      if (err) return logger.error(err);
      var result = files.map(function(file) {
        file = file.split('.');
        return file[0];
      });

      var data = JSON.stringify(result, null, 2);
      fs.writeFile('index.js', generateFileContent(data), function(err) {
        if (err) throw err;
        logger.success('File saved!');
      });
      // cleanup(); disable to preven remove other tmp files of the system.
    });
  });
});
