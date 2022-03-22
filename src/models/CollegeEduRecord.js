const mongoose = require("mongoose");

const CollegeEduRecordSchema = new mongoose.Schema({
    instituteCode: {
        type: String,
        required: true
    },
    collegeId:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseDurationInYears: {
        type: Number,
        required: true
    },
    semesterEnrollmentDate: {
        type: Date,
        required: true
    },
    semesterCompletionDate: {
        type: Date,
        required: true
    },
    currentSemester: {
        type: Number,
        required: true
    },
    maxScore: {
        type: Number,
        required: true
    },
    aquiredScore: {
        type: Number,
        required: true
    },
    subjectWiseScore: {
        type: [{
            name: String,
            maxScore: Number,
            aquiredScore: Number
        }],
        required: true
    },
});

module.exports = CollegeEduRecordSchema;