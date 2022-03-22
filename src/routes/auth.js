const router = require("express").Router();
const School = require("../models/School");
const College = require("../models/College");

router.post("/register/school", async (req, res) => {
    try {
        let school = await School.findOne({ instituteCode: req.body.instituteCode });
        if (!school) {
            school = new School(req.body);
            console.log(school);
            await school.save();
            res.json(school);
        } else {
            res.json(school)
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/register/college", async (req, res) => {
    try {
        let college = await College.findOne({ instituteCode: req.body.instituteCode });
        if (!college) {
            college = new College(req.body);
            console.log(college);
            await college.save();
            res.json(college);
        } else {
            res.json(college)
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;