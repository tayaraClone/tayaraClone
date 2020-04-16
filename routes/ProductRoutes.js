let mongoose = require('mongoose');
let Products = mongoose.model('Products');
let verify = require('./verifyToken')

module.exports = (app) => {
    app.post('/makeProduct', verify, async (req, res) => {
        let newProdData = req.body;
        delete newProdData.madeProd

        try {
            let newProduct = new Products(newProdData);
            await newProduct.save()
            res.send({
                results: {
                    response: 'handeled make product request',
                    id: newProduct._id
                }
            }).end()
        } catch (err) {
            res.status(400).send(err).end()
        }
    })

    app.get('/sellerProds/:account_id', verify, async (req, res) => {
        let { account_id } = req.params
        Products.find({ account_id }, async (err, data) => {
            if (err) { return res.status(400).send(err).end() }

            res.send({
                results: {
                    products: data || []
                }
            }).end()
        })
    })

    app.get('/allProds', verify, async (req, res) => {
        try {
            let products = Products.find();
            res.send({
                results: {
                    response: 'Handeled request to retreive all products',
                    products: products || []
                }
            }).end()

        } catch (err) {
            res.status(401).send(err).end();
        }
    })
}