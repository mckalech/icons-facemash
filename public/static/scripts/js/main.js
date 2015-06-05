(function() {
  require.config({
    baseUrl: "scripts/js/",
    paths: {
      underscore: "libs/underscore/underscore",
      jquery: "libs/jquery/dist/jquery.min",
      backbone: "libs/backbone/backbone",
      text: "libs/requirejs-text/text",
      handlebars: "libs/handlebars/handlebars.amd.min",
      imagesLoaded: "libs/imagesloaded/imagesloaded.pkgd.min"
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      waitSeconds: 0
    }
  });

  require(['jquery', 'app'], function($, app) {
    $(function() {
      return app.init();
    });
    return this;
  });

}).call(this);
