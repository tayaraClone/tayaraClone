let mongoose = require('mongoose');
let Products = mongoose.model('Products');

module.exports = (app) => {
    app.post('/makeProduct', async (req, res) => {
        try {
            let newProduct = new Products(req.body);
            await newProduct.save()
            res.send({
                results: {
                    response: 'handeled make product request',
                    id: newProduct._id
                }
            }).end()
        }
        catch (err) {
            res.send(err).end()
        }
    })
}