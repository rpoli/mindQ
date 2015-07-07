define(['backbone', 'react', 'jsx!views/todoList'], function (Backbone, React, TodoList) {
  return Backbone.Router.extend({
    routes: {
      '*default': 'defaultAction'
    },
    
    defaultAction: function () {
      var todos = new Backbone.Collection([
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
    }
  });
});