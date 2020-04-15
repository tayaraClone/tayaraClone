let mongoose = require('mongoose');
let Products = mongoose.model('Products');

module.exports = (app) => {
    app.post('/makeProduct', async (req, res) => {
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
}