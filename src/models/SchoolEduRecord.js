const mongoose = require("mongoose");

const SchoolEduRecordSchema = new mongoose.Schema({
    instituteCode:{
        type: String,
        required: true
    },
    schoolId:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    enrollmentDate: {
        type: Date,
        required: true
    },
    completionDate:{
        type: Date,
        required: true
    },
    class: {
        type: Number,
        required: true
    },
    board: {
        type: String,
        required: true
    },
    maxScore: {
        type: Number,
        required: true
    },
    aquiredScore: {
        type: Number,
        required: true
    }
});

module.exports = SchoolEduRecordSchema;