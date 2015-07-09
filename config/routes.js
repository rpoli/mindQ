/** 
 * Routes
 * Module dependencies.
 */


var indexController = require('../app/controllers/index');

exports.init = function(app) {
    app.get('/', indexController.renderBase);

    app.post("/", indexController.startShow);

    
    app.get('/question', indexController.question);

};
