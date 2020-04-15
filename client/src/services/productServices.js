let axios = require('axios');

export default {
    makeProduct: async (data, onMake) => {
        axios.post('http://localhost:5000/makeProduct', data)
            .then(res => {
                onMake()
            })
            .catch(err => console.log(err));
    },
    sellerProds: async (id, onRetreive) => {
        axios.get(`http://localhost:5000/sellerProds/${id}`)
            .then(res => {
                console.log(res)
                let { products } = res.data.results;
                onRetreive(products);
            })
            .catch(err => console.log(err));
    }
}