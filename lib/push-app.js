'use strict'

var path = require('path');
var common = require('./common');

function pushApp(appDir, callback) {
  return pushAppWithOptions(appDir, [], callback);
}

function pushAppSync(appDir) {
  return pushAppWithOptions(appDir);
}

function pushAppWithOptions(appDir, options, callback) {
  if (appDir) process.chdir(appDir);
  if (!options) options = [];
  options.unshift('push');
  return common.runCf(options, callback);
}

function pushAppWithOptionsSync(appDir, options) {
  if (appDir) process.chdir(appDir)
  if (!options) options = [];
  options.unshift('push');
  return common.runCfWithSync(options);
}

module.exports = {
  pushApp: pushApp,
  pushAppSync: pushAppSync,
  pushAppWithOptions: pushAppWithOptions,
  pushAppWithOptionsSync: pushAppWithOptionsSync
}
