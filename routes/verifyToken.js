let jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let token = req.header('auth-token');
    if (!token) res.status(401).send('access denied').end()
    else {
        try {

            let verified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = verified;
            next();
        }
        catch (err) {
            res.status(400).send('Invalid Token').end()
        }
    }

}