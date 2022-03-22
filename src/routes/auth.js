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

router.post("/register", async (req, res) => {
    if (req.body.organisation === "college") {
        try {
            let college = await College.findOne({ instituteCode: req.body.instituteCode });
            if (!college) {
                college = new College({
                    name: req.body.organisationName,
                    email: req.body.email,
                    password: req.body.password,
                    instituteCode: req.body.instituteCode,
                    address: {
                        state: req.body.state,
                        city: "SomeCity"
                    }
                });
                console.log(college);
                await college.save();
                res.redirect("/login")
            } else {
                res.redirect("/login")
            }
        } catch (error) {
            res.redirect("/register");
        }
    } else if (req.body.organisation === "school") {
        try {
            let school = await School.findOne({ instituteCode: req.body.instituteCode });
            if (!school) {
                school = new School({
                    name: req.body.organisationName,
                    email: req.body.email,
                    password: req.body.password,
                    instituteCode: req.body.instituteCode,
                    address: {
                        state: req.body.state,
                        city: "someCity"
                    }
                });
                await school.save();
                res.redirect("/login")
                // res.render("login")
            } else {
                res.redirect("/login")
            }
        } catch (error) {
            res.redirect("/register");
        }
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