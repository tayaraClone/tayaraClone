let mongoose = require('mongoose');
let Products = mongoose.model('Products');
let verify = require('./verifyToken')
let jwt = require('jsonwebtoken')

module.exports = (app) => {
    app.post('/makeProduct', verify, async (req, res) => {

        try {

            let newProdData = req.body;
            newProdData.account_id = req.user._id; // set up account_id to save the data in the db
            delete newProdData.madeProd; // delete data not needed

            let newProduct = new Products(newProdData);
            await newProduct.save() // save data
            res.send({
                results: {
                    response: 'handeled make product request'
                }
            }).end()
        } catch (err) {
            res.status(400).send(err).end() // send error if there is a problem
        }
    })

    app.get('/sellerProds', verify, async (req, res) => {
        let account_id = req.user._id;

        Products.find({ account_id }, async (err, data) => {
            if (err) { return res.status(400).send(err).end() } // if there is an error send it

            res.send({ // send data
                results: {
                    products: data || []
                }
            }).end()
        })
    })

    app.get('/allProds', async (req, res) => {

        try {
            let products = await Products.find() || []; // if there is no product set up products value to empty array instead of null
            res.send({ // send successful response 
                results: {
                    response: 'Handeled request to retreive all products',
                    products
                }
            }).end()

        } catch (err) {
            res.status(401).send(err).end(); // send error if there is a problem
        }
    })

    app.put('/finishedStock/:_id', verify, async (req, res) => {
        let { _id } = req.params;
        let { stockCondition } = req.body
        Products.findByIdAndUpdate({ _id }, { stockCondition }, async (err, result) => {

            if (err) {
                res.send(err).end() // send error if there one found
            }
            else {
                res.send({ // send succesful response
                    results: {
                        response: 'handeld update request',
                        result
                    }
                }).end()
            }

        })
    })
}