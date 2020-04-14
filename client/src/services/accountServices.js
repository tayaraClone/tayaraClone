let axios = require('axios');

export default {
    signUp: async (data, openAcc) => {
        axios.post('http://localhost:5000/signup', data)
            .then(res => {
                let { id } = res.data.results;
                localStorage.setItem('___________id', id)
                openAcc()
                console.log(res)
            })
            .catch(err => console.log(err))
    },
    signIn: async (data, openAcc) => {
        axios.post('http://localhost:5000/signin', data)
            .then(res => {
                let { id } = res.data.results;
                localStorage.setItem('___________id', id);
                openAcc();
            })
            .catch(err => console.log(err))
    }
}