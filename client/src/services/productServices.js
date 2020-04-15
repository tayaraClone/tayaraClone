let axios = require('axios');

export default {
    makeProduct: async (data, onMake) => {
        axios.post('http://localhost:5000/makeProduct', data)
            .then(res => {
                console.log(res)
                onMake()
            })
            .catch(err => console.log(err));
    }
}