define(['backbone', 'react','collections/mindqCollection','reactTemplates/Dashboard'], function (Backbone,React,mindqCollection,Dashboard) {
 var Router= Backbone.Router.extend({
    routes: {
      '*default': 'defaultAction'
    },

     initialize: function() {
     var collections = new mindqCollection();    
      collections.fetch({success:this.defaultAction});
      
    },
    
    defaultAction: function (collections) {
      console.log("create session");
      console.log(collections,"collections");
     // React.renderComponent(<Dashboard/>, document.body);

      React.render(
            React.createElement(Dashboard, {"minqObject" : collections.models}),
            document.body
          );

    }
  });
  return Router;
});