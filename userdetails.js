const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
    age: {
        type: Number,
        required: true
    },
    experience: {
        type: String,
        required: true // Remove the unique constraint
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
