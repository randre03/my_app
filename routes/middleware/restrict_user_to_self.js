/**
 * Created by randre03 on 8/13/14.
 */

function restrictUserToSelf(req, res, next) {
    if(!req.session.user || req.session.user.username !== req.user.username) {
        res.send('Unauthorized', 401);
    } else {
        next();
    }
}

module.exports = restrictUserToSelf;