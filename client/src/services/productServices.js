let axios = require('axios');

export default {
    makeProduct: async (data) => {
        axios.post('/makeProduct', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }
}