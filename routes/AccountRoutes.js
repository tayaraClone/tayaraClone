let mongoose = require('mongoose');
let Accounts = mongoose.model('Accounts');
let cryptoJS = require('crypto-js');
let jwt = require('jsonwebtoken');

module.exports = (app) => {
    app.post('/signup', async (req, res) => {
        Accounts.findOne({ email: req.body.email }, async (err, account) => {
            if (err) throw err;
            if (!account) {
                let accData = req.body;
                let cipherPass = cryptoJS.AES.encrypt(accData.password, '_____________password__________').toString();
                // cipherPass is a crypted password
                accData.password = cipherPass
                let newAccount = new Accounts(accData); // made new collection 
                await newAccount.save(); // saved collection
                const token = jwt.sign({ _id: newAccount._id }, process.env.TOKEN_SECRET)
                // token is a jwt token with a secret token from the .env file
                res.header('auth-token', token).send({
                    results: {
                        response: 'handeled sign up request',
                        id: newAccount._id
                    }
                }); // send response
                res.end(); // end response

            } else {
                res.status(400).send({
                    results: {
                        response: 'your email is used already in an other account'
                    }
                }).end() // send this response if the email already used
            }
        })
    })

    app.post('/signin', async (req, res) => {
        let { email, password } = req.body
        Accounts.findOne({ email }, async (err, acc) => {
            if (err) throw err
            if (!acc) {
                res.status(400).send({
                    results: {
                        response: 'account is not found'
                    }
                }).end() // send response of account not found if there is no account with same request email
            } else {
                var bytes = cryptoJS.AES.decrypt(acc.password, '_____________password__________');
                var originalPass = bytes.toString(cryptoJS.enc.Utf8);
                // originalPass is a encrypted password form the database
                if (originalPass === password) {
                    const token = jwt.sign({ _id: acc._id }, process.env.TOKEN_SECRET)
                    // token is a jwt token with a secret token from the .env file
                    res.header('auth-token', token).send({
                        results: {
                            response: 'handled sign up request',
                            id: acc._id
                        }
                    }).end() // send id if the passwords request and the password from the db is the same 
                }
                else {
                    res.status(400).send({
                        results: {
                            response: 'password is not validated'
                        }
                    }).end() // send this response if the password is not validated
                }
            }
        })
    })
}