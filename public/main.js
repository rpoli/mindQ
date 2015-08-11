require.config({
  shim: {
    'jquery':{
    exports: '$'
  },
    'zepto': {
      exports: 'Zepto'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'zepto'],
      exports: 'Backbone'
    },
    'react' : {
      exports : 'React'
    },
    'jsx' : {
      exports :'jsx'
    },
    'bootstrap':{
    deps: ['jquery'],
    exports:'bootstrap'
  },
  'Modal':{
    deps:['bootstrap','jquery'],
    exports:'Modal'
  },
  },
  paths: {
    jquery:'libs/jquery'
    ,zepto: 'libs/zepto'
    , underscore: 'libs/underscore'
    , backbone: 'libs/backbone'
    , text: 'libs/require/text'
    , react : 'libs/reactJS'
    , jsx : 'libs/JSXTransformer'
    ,bootstrap :  'libs/bootstrap',
    Modal:"libs/Modal"
  }
});

require(['router'], function( Router) {
    var router = new Router();
    //app.run();
    //Backbone.history.start({pushState: false}); we are doing this is app.js
});