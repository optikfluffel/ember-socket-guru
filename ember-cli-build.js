/* eslint-env node*/
/* eslint-disable no-var */
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    svgJar: {
      sourceDirs: ['tests/dummy/public'],
    },
    snippetPaths: ['tests/dummy/app/snippets'],
    nodeAssets: {
      'highlight.js': {
        public: ['styles/solarized-dark.css']
      }
    }
  });

  app.import('bower_components/pusher/dist/web/pusher.js');
  app.import('bower_components/socket.io-client/dist/socket.io.js');
  app.import('bower_components/action-cable/dist/action_cable.js');

  if (app.env === 'test') {
    app.import('bower_components/pusher-test-stub/build/bin/pusher-test-stub.js');
  }

  return app.toTree();
};
