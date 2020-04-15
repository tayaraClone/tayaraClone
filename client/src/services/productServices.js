let axios = require('axios');

export default {
    makeProduct: async (data, onMake) => {
        axios.post('http://localhost:5000/makeProduct', data)
            .then(res => {
                onMake()
            })
            .catch(err => console.log(err));
    },
    sellerProds: async (id, retreive) => {
        axios.get(`http://localhost:5000/sellerProds/${id}`)
            .then(res => {
                let { results } = res.data
                retreive(results);
            })
            .catch(err => console.log(err));
    }
}