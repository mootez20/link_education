const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    firstname: {
            type: String,
           
    },
    lastname: {
            type: String, 
    },
    birthday: {
            type: String, 

    },
    email: {
            type: String,
           
    },
    
    phone_number: {
        type: String, 

    },
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Admin', AdminSchema);