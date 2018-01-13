'use strict'

var path = require('path')
var pushApp = require(path.join(__dirname, 'lib', 'push-app'));
var getApps = require(path.join(__dirname, 'lib', 'get-apps'));
var deleteApp = require(path.join(__dirname, 'lib', 'delete-app'));
var getServices = require(path.join(__dirname, 'lib', 'get-services'));
var createService = require(path.join(__dirname, 'lib', 'create-service'));
var deleteService = require(path.join(__dirname, 'lib', 'delete-service'));
var bindService = require(path.join(__dirname, 'lib', 'bind-service'));
var mapRoute = require(path.join(__dirname, 'lib', 'map-route'));
var stopApp = require(path.join(__dirname, 'lib', 'stop-app'));
var renameApp = require(path.join(__dirname, 'lib', 'rename-app'));

var cloudFoundry = {}

cloudFoundry.pushApp = pushApp.pushApp;
cloudFoundry.pushAppSync = pushApp.pushAppSync;
cloudFoundry.pushAppWithOptions = pushApp.pushAppWithOptions;
cloudFoundry.pushAppWithOptionsSync = pushApp.pushAppWithOptionsSync;

cloudFoundry.getApps = getApps();
cloudFoundry.getAppsSync = getApps(true);

cloudFoundry.deleteApp = deleteApp();
cloudFoundry.deleteAppSync = deleteApp(true);

cloudFoundry.getServices = getServices();
cloudFoundry.getServicesSync = getServices(true);

cloudFoundry.createService = createService();
cloudFoundry.createServiceSync = createService(true);

cloudFoundry.deleteService = deleteService();
cloudFoundry.deleteServiceSync = deleteService(true);

cloudFoundry.bindService = bindService();
cloudFoundry.bindServiceSync = bindService(true);

cloudFoundry.mapRoute = mapRoute.mapRoute;
cloudFoundry.mapRouteWithSync = mapRoute.mapRouteWithSync;

cloudFoundry.stopApp = stopApp.stopApp;
cloudFoundry.stopAppWithSync = stopApp.stopAppWithSync;

cloudFoundry.renameApp = renameApp.renameApp;
cloudFoundry.renameAppWithSync = renameApp.renameAppWithSync;

module.exports = cloudFoundry;
