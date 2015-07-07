require.config({
    deps: ["main"],
    paths: {
        jquery: "/libs/jquery",
        //lodash: "../lib/lodash.compat",
        underscore: '/libs/underscore',
        backbone: "/libs/backbone",
        jsx: "/libs/jsx",
        JSXTransformer: '/libs/JSXTransformer',
        react: '/libs/reactJS'
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});

require(['app', 'jsx!router'], function(app, Router) {
    app.router = new Router();
    app.run();
    //Backbone.history.start({pushState: false}); we are doing this is app.js
});

