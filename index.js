require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/tayaraClone`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('mongoose connected'))
    .catch(err => console.log(err))
mongoose.set('useCreateIndex', true);

app.use(cors())
app.use(bodyParser.json());

require('./models/Accounts');
require('./models/Products');

require('./routes/AccountRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});