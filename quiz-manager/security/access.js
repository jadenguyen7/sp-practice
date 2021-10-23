// var adminAccess = (req, res, next) => {
//     if (req.user && req.user.role == 'admin') {
//         next();
//         return;
//     }
//     res.redirect('/error');
// }

// var readAccess = (req, res, next) => {
//     if (req.user && req.user.role == 'read') {
//         next();
//         return;
//     }
//     res.redirect('/error');
// }

// var restrictedAccess = (req, res, next) => {
//     if (req.user && req.user.role == 'restricted') {
//         next();
//         return;
//     }
//     res.redirect('/error');
// }

var restrictedAccess = (req, res, next) => {
    if (req.user && (req.user.role == 'restricted')) {
        next();
        return;
    }
    res.redirect('/error');
 }
 

var readAccess = (req, res, next) => {
    if (req.user && (req.user.role == 'read')) {
        next();
        return;
    }
    res.redirect('/error');
 }
 
 var adminAccess = (req, res, next) => {
    if (req.user && (req.user.role == 'admin')) {
        next();
        return;
    }
    res.redirect('/error');
 }

module.exports.adminAccess = adminAccess;
module.exports.readAccess = readAccess;
module.exports.restrictedAccess = restrictedAccess;
