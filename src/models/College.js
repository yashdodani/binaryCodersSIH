const mongoose = require("mongoose");
const AddressSchema = require("./Address");

const CollegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    instituteCode: {
        type: String,
        required: true
    },
    address: {
        type: AddressSchema,
        required: true
    },
});

module.exports = new mongoose.model("College", CollegeSchema);