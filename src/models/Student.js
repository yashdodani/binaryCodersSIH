const mongoose = require("mongoose");
const SchoolEduRecordSchema = require("./SchoolEduRecord");
const CollegeEduRecordSchema = require("./CollegeEduRecord");
const AddressSchema = require("./Address");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: AddressSchema,
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
    aadhaarNumber: {
        type: Number,
        required: true
    },
    eduRecords: {
        type: [SchoolEduRecordSchema || CollegeEduRecordSchema],
    }
});

module.exports = new mongoose.model("Student", StudentSchema);