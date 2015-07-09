define(['backbone', 'react', 'jsx!views/landing'], function (Backbone, React, Landing) {
  return Backbone.Router.extend({
    routes: {
      '*default': 'defaultAction'
    },
    
    defaultAction: function () {

      console.log("create session");

      React.renderComponent(<Landing />, document.body);

      /* var todos = new Backbone.Collection([
        {
          text: 'Dishes!',
          dueDate: new Date(),
          keyID : 123
        },{
          text: 'Dishes2!',
          dueDate: new Date(),
          keyID : 1234
        }
      ]);
      React.renderComponent(<TodoList todos={todos} />, document.body); 

      */
    }
  });
});