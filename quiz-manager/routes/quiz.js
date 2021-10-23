var express = require('express');
var router = express.Router();
var passport = require('passport');
var { adminAccess, readAccess, restrictedAccess } = require('../security/access');
const quizService = require("../services/quizService");

// router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
//     res.render('quiz/allQuizzes');
// });

// router.post('/', passport.authenticate('jwt', { session: false }), restrictedAccess, function(req, res, next) {
//     // res.render('quiz/index');
//     quizService.createQuiz(req.body);
//       res.render('quiz/index');
//       return;
// });

// get all quizzes
  router.get('/', passport.authenticate('jwt', { session: false }), adminAccess, function(req, res, next) {
    function onSuccess(quizzes) {
        res.render('quiz/allQuizzes', {quizzes: quizzes});
    }

    quizService.getAllQuizzes(onSuccess);
});

module.exports = router;