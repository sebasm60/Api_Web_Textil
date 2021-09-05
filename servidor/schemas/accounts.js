const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const accounts = new Schema({
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
});

accounts.pre('save', function(next){
    bcrypt.genSalt(10)
    .then(salts => {
        bcrypt.hash(this.password, salts)
        .then(hash => {
            this.password = hash;
            next();
        });
    })
    .catch(err => next(err));
});

accounts.pre('findOneAndUpdate', function(next){
    if(this._update.password){
        bcrypt.genSalt(10)
        .then(salts => {
            bcrypt.hash(this._update.password, salts)
            .then(hash => {
                this._update.password = hash;
                next();
            });
        })
        .catch(err => next(err));
    };
});

module.exports = mongoose.model('accounts', accounts);