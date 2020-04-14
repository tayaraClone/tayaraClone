let mongoose = require('mongoose');
let Accounts = mongoose.model('Accounts');

module.exports = (app) => {
    app.post('/signup', async (req, res) => {
        let newAccount = new Accounts(req.body);
        await newAccount.save()
        Accounts.findOne({ email: req.body.email }, async (err, data) => {
            if (err) throw err;
            res.send({ results: data });
            res.end();
        })
    })
}