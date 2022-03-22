const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    state:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = AddressSchema;