const Course = require("../models/cour.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Tutorial
    const cour = new Course({
        course_code: req.body.course_code,
        credits: req.body.credits,
        course_name: req.body.course_name,
        course_desc: req.body.course_desc
    });

    // Save Tutorial in the database
    Course.create(cour, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        else res.send(data);
    });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;

    Course.getAll(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};

// // Find a single Tutorial with a id
exports.findOne = (req, res) => {
    Course.findById(req.query.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found cour with code ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving cour with code ${req.query.id}`
                });
            }
        } else res.send(data);
    })
};

// Delete all Tutorials from the database.
exports.delete = (req, res) => {
    const title = req.query.title;
    Course.remove(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all data."
            });
        else res.send({ message: `All Course data were deleted successfully!` });
    });
};