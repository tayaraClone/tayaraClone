let jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let token = req.header('auth-token'); // token is value with the header name 'auth-token'
    if (!token) res.status(401).send('access denied').end() // if token not found send 'access denied'
    else {
        try {

            let verified = jwt.verify(token, process.env.TOKEN_SECRET); // verified takes value _id (the user id)
            req.user = verified;
            next();
        }
        catch (err) {
            res.status(400).send('Invalid Token').end(); // if the token isn't valid send 'Invalid Token'
        }
    }

}