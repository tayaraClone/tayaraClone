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
    sellerProds: async (id, onRetreive) => {
        // sellerProds is a function to retrieve a sepecific seller with the the id
        axios.get(`http://localhost:5000/sellerProds/${id}`, { headers: { 'auth-token': localStorage.getItem('_______________JWT_Token') } })
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
                let data = { allProds: products }
                // for (let i = 0; i < products.length; i++) {
                //     let product = products[i];
                //     if (!data[product.categorie]) { data[product.categorie] = [product] }
                //     else { data[product.categorie].push(product) };
                // }

                onRetreive(data);
            })
            .catch(err => console.log(err));
    }
}