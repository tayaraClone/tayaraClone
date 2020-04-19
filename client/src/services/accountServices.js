let axios = require('axios');

export default {
    signUp: async (data, openAcc) => {
        // data parameter is a data for submiting the data to the db
        // openAcc parameter is a function to the change the state in the app when you invoke it

        axios.post('/signup', data)
            .then(res => {
                let { token } = res.data.results;
                localStorage.setItem('_______________JWT_Token', token)
                openAcc()
                console.log(res)
            })
            .catch(err => console.log(err))
    },
    signIn: async (data, openAcc) => {
        // data parameter is a data to open the client account
        // openAcc parameter is a function to the change the state in the app when you invoke it

        axios.post('/signin', data)
            .then(res => {

                let { token } = res.data.results;
                localStorage.setItem('_______________JWT_Token', token)
                openAcc();
            })
            .catch(err => console.log(err))
    }
}