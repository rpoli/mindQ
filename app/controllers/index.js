/**
 * Module dependencies.
 */

exports.renderBase = function(req, res, next) {
    res.render('layouts/index.html', {
        msg: "Welcome11"
    });
};
exports.startShow = function(req, res, next){
   
    if(true)
    {
        res.redirect('/question');
    }else{
        
        res.render('layouts/index.html', {
            msg: "error"
        });
    }
};

exports.question = function(req, res, next){
   console.log("export question");
   res.render('layouts/question.html', {
            msg: "error"
        });
    //res.json({});
   // res.render('layouts/question.html');
}
exports.home = function(req, res, next) {
    res.json(req.user);
};

exports.postrequest = function(req, res, next) {
    res.render('external/post-request.html', {});
};
exports.register = function(req, res, next) {
    res.render('layouts/register.html', {});
};
exports.dashboard = function(req, res, next) {
    res.render('layouts/dashboard.html', {});
};
exports.forgotpwd = function(req, res, next) {
    res.render('layouts/forgot-password.html', {});
};
exports.calendar = function(req, res, next) {
    res.render('layouts/index.html', {});
};

exports.inbox = function(req, res, next) {
    res.render('layouts/index.html', {});
};

exports.tasks = function(req, res, next) {
    res.render('layouts/tasks.html', {});
};

exports.profile = function(req, res, next) {
    res.render('layouts/profile.html', {});
};

exports.editprofile = function(req, res, next) {
    res.render('layouts/index.html', {});
};

