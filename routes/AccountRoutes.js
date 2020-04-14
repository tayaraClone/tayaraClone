let mongoose = require('mongoose');
let Accounts = mongoose.model('Accounts');

module.exports = (app) => {
    app.post('/signup', async (req, res) => {
        Accounts.findOne({ email: req.body.email }, async (err, account) => {
            if (err) throw err;
            if (!account) {
                let newAccount = new Accounts(req.body);
                await newAccount.save()
                Accounts.findOne({ email: req.body.email }, async (err, data) => {
                    res.send({ results: data });
                    res.end();

                })

            } else {
                res.status(503).end()
            }
        })
    })
}