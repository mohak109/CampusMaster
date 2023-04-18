const CourseDetails = require("../models/need.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Tutorial
    const courdet = new CourseDetails({
        course_code: req.body.course_code,
        rollno: req.body.rollno,
        grade_id: req.body.grade_id,
        semester: req.body.semester
    });

    // Save Tutorial in the database
    CourseDetails.create(courdet, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        else res.send(data);
    });
};

exports.findNonReg = (req, res) => {
    const title = req.query.id;

    CourseDetails.getNonReg(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};

exports.findReg = (req, res) => {
    const title = req.query.id;

    CourseDetails.getReg(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};

exports.delete = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const courdet = new CourseDetails({
        course_code: req.body.course_code,
        rollno: req.body.rollno
    });
    CourseDetails.remove(courdet, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all data."
            });
        else res.send({ message: `All Registered course data were deleted successfully!` });
    });
};