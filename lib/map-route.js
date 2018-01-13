'use strict'

var common = require('./common');

function mapRoute(options, callback) {
  if (!options) {
    options = [];
  }
  options.unshift('map-route');
  return common.runCf(options, callback);
}

function mapRouteWithSync(options) {
  if (!options) {
    options = [];
  }
  options.unshift('map-route');
  return common.runCfWithSync(options);
}

module.exports = {
  mapRoute: mapRoute,
  mapRouteWithSync: mapRouteWithSync
}
