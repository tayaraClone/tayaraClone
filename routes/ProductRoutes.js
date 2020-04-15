let mongoose = require('mongoose');
let Products = mongoose.model('Products');

module.exports = (app) => {
    app.post('/makeProduct', async (req, res) => {
        let newProdData = req.body;
        delete newProdData.madeProd
        console.log(newProdData)

        let newProduct = new Products(newProdData);
        await newProduct.save()
        res.send({
            results: {
                response: 'handeled make product request',
                id: newProduct._id
            }
        }).end()


    })
}