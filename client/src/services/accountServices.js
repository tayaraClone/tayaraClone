let axios = require('axios');

export default {
    signUp: async (data, openAcc) => {
        // data parameter is a data for submiting the data to the db
        // openAcc parameter is a function to the change the state in the app when you invoke it
        axios.post('http://localhost:5000/signup', data)
            .then(res => {
                let { id, token } = res.data.results;
                localStorage.setItem('___________id', id)
                localStorage.setItem('_______________JWT_Token', token)
                openAcc()
                console.log(res)
            })
            .catch(err => console.log(err))
    },
    signIn: async (data, openAcc) => {
        // data parameter is a data to open the client account
        // openAcc parameter is a function to the change the state in the app when you invoke it
        axios.post('http://localhost:5000/signin', data)
            .then(res => {
                let { id, token } = res.data.results;
                localStorage.setItem('___________id', id);
                localStorage.setItem('_______________JWT_Token', token)
                openAcc();
            })
            .catch(err => console.log(err))
    }
}