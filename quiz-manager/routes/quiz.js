var express = require('express');
var router = express.Router();
var passport = require('passport');
var { adminAccess, readAccess, restrictedAccess } = require('../security/access');

router.get('/quiz', passport.authenticate('jwt', { session: false }), readAccess, function(req, res, next) {
    res.render('quiz/quiz');
});

module.exports = router;