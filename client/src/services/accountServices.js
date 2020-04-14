let axios = require('axios');

export default {
    signUp: async (data, openAcc) => {
        axios.post('/signup', data)
            .then(res => {
                let id = res.data.results;
                localStorage.setItem('_____id', id)
                openAcc()
            })
            .catch(err=>console.log(err))
    }
}