'use strict'

var common = require('./common');

function stopApp(options, callback) {
  if (!options) {
    options = [];
  }
  options.unshift('stop');
  return common.runCf(options, callback);
}

function stopAppWithSync(options) {
  if (!options) {
    options = [];
  }
  options.unshift('stop');
  return common.runCfWithSync(options);
}

module.exports = {
  stopApp: stopApp,
  stopAppWithSync: stopAppWithSync
}
