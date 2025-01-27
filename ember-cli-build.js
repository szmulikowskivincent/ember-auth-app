'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {});

  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');

  return app.toTree();
};
