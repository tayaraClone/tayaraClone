let axios = require('axios');

export default {
    makeProduct: async (data, onMake) => {
        // makeProduct sends data to the route so it can save it the db
        axios.post('http://localhost:5000/makeProduct', data, {
            headers: { 'auth-token': localStorage.getItem('_______________JWT_Token') }
        })
            .then(res => {
                onMake()
                // onMake is a function from makeNewProduct file 
            })
            .catch(err => console.log(err));
    },
    sellerProds: async (onRetreive) => {
        // sellerProds is a function to retrieve a sepecific seller with the the id
        axios.get(`http://localhost:5000/sellerProds`, { headers: { 'auth-token': localStorage.getItem('_______________JWT_Token') } })
            .then(res => {

                let { products } = res.data.results;
                onRetreive(products);
            })
            .catch(err => console.log(err));
    },
    allProds: async (onRetreive) => {
        axios.get('http://localhost:5000/allProds')
            .then(res => {
                let { products } = res.data.results;
                onRetreive(products);
            })
            .catch(err => console.log(err));
    },
    finishedStock: async (id) => {
        axios.put(`http://localhost:5000/finishedStock/${id}`, {
            stockCondition: "finished"
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

}