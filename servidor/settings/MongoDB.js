const mongoose = require('mongoose');
const URI = process.env.URI

mongoose.connect(URI, {
        //useCreateIndex: true,
        useNewUrlParser: true,
        //useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(db => console.log('Database online'))
    .catch(err => console.log(err));

module.exports = mongoose;