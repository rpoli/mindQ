define(['backbone'], function (Backbone) {
  var app = function () {

  };

  _.extend(app, {
    router: null,

    run: function () {
      Backbone.history.start({
        pushState: true,
        root: 'layouts/index.html'
      });
    }
  });

  return app;
});