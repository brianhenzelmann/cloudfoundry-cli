'use strict'

var common = require('./common');

function renameApp(options, callback) {
  if (!options) {
    options = [];
  }
  options.unshift('rename');
  return common.runCf(options, callback);
}

function renameAppWithSync(options) {
  if (!options) {
    options = [];
  }
  options.unshift('rename');
  return common.runCfWithSync(options);
}

module.exports = {
  renameApp: renameApp,
  renameAppWithSync: renameAppWithSync
}
