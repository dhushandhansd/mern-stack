const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', user);
module.exports = User;