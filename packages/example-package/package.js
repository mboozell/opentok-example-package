Package.describe({
  name: 'mboozell:example-package',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'example',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  //api.use([
  //  'rocketchat:lib@0.0.1',
  //]);

  api.use([
    'templating'
  ], 'client');

  Npm.depends({
    'opentok': '2.3.0'
  });

  api.addFiles([
    'server.js'
  ], 'server');

  api.addFiles([
    'client.html',
    'client.js',
    'tabBar.js'
  ], 'client');
});

