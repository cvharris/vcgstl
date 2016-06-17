/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var autoprefixer = require('broccoli-autoprefixer');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'fonts-awesome/fonts/*.*',
      'side-nav/src/initSideNavPanel.js',
      'side-nav/src/sideNavPanel.js',
      'google-analytics/dist/google-analytics.js',
      'wwt-user/dist/wwt-user.js'
    ],
    lessCompiler: {
      'paths': ['./public/less']
    }
  });
  return autoprefixer(app, { browsers: ['last 2 version'] });
};
