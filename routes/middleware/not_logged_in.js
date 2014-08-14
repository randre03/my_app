/**
 * Created by randre03 on 8/13/14.
 */

function notLoggedIn(req, res, next) {
    if(req.session.user) {
        res.send('Unauthorized', 401);
    } else {
        next();
    }
}

module.exports = notLoggedIn;