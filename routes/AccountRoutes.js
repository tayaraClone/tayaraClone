let mongoose = require('mongoose');
let Accounts = mongoose.model('Accounts');
let cryptoJS = require('crypto-js');

module.exports = (app) => {
    app.post('/signup', async (req, res) => {
        Accounts.findOne({ email: req.body.email }, async (err, account) => {
            if (err) throw err;
            if (account === null) {
                let accData = req.body;
                let cipherPass = cryptoJS.AES.encrypt(accData.password, '_____________password__________').toString();
                accData.password = cipherPass
                let newAccount = new Accounts(accData);
                await newAccount.save();
                res.send({
                    results: {
                        response: 'handeled sign up request',
                        id: newAccount._id
                    }
                });
                res.end();

            } else {
                res.status(202).send({
                    results: {
                        response: 'your email is used already in an other account'
                    }
                }).end()
            }
        })
    })

    app.post('/signin', async (req, res) => {
        let { email, password } = req.body
        Accounts.findOne({ email }, async (err, acc) => {
            if (err) throw err
            if (!acc) {
                res.status(203).send({
                    results: {
                        response: 'account is not found'
                    }
                }).end()
            } else {
                var bytes = cryptoJS.AES.decrypt(password, '_____________password__________');
                var originalPass = bytes.toString(cryptoJS.enc.Utf8);
                if (originalPass === acc.password) {
                    res.send({
                        results: {
                            response: 'handled sign up request',
                            id: acc._id
                        }
                    }).end()
                }
                else {
                    res.status(202).send({
                        results: {
                            response: 'that is not your password'
                        }
                    }).end()
                }
            }
        })
    })
}