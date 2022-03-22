const router = require("express").Router();
const Student = require("../models/Student");
const School = require("../models/School");

router.post("/upload", async (req, res) => {
    try {
        let student = await Student.findOne({ aadhaarNumber: req.body.aadhaarNumber });
        console.log(student);
        if (!student) {
            req.body.password = "u09u0qadfg"
            req.body.eduRecords = [req.body.schoolEduRecord];
            student = new Student(req.body);
            const savedStudent = await student.save();
            res.json(savedStudent);
        } else {
            if (student.eduRecords[student.eduRecords.length - 1] === req.body.schoolEduRecord) return res.json("Same record");
            let updatedStudent = await Student.updateOne({ _id: student._id }, { $push: { eduRecords: req.body.schoolEduRecord } });
            res.json(updatedStudent);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/all", async (req, res) => {
    try {
        let schools = await School.find();
        res.json(schools);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;