// startupSection.js (No changes needed)

const mongoose = require('mongoose');

const startupSectionSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    whatCanYouDo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('StartupSection', startupSectionSchema);
