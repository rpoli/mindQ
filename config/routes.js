/** 
 * Routes
 * Module dependencies.
 */


var indexController = require('../app/controllers/index');

exports.init = function(app) {
    app.get('/', indexController.renderBase);

    app.post("/startShow", indexController.startShow);

};
