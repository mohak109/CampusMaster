const Student = require("../models/stud.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Tutorial
    const stud = new Student({
        rollno: req.body.rollno,
        f_name: req.body.first_name,
        m_name: req.body.middle_name,
        l_name: req.body.last_name,
        email: req.body.off_email,
        program: req.body.enr_program,
        semester: req.body.cur_semester,
        batch: req.body.batch,
        institute: req.body.institute
    });

    // Save Tutorial in the database
    Student.create(stud, (err, data) => {
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

    Student.getAll(title, (err, data) => {
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
    req.query.id ?
        Student.findById(req.query.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found auth with Id ${req.query.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: `Error retrieving auth with Id ${req.query.id}`
                    });
                }
            } else res.send(data);
        }) :
        Student.findByEmail(req.query.email, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found auth with email ${req.query.email}.`
                    });
                } else {
                    res.status(500).send({
                        message: `Error retrieving auth with email ${req.query.email}`
                    });
                }
            } else res.send(data);
        });
};

// Delete all Tutorials from the database.
exports.delete = (req, res) => {
    const title = req.query.title;
    Student.remove(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all data."
            });
        else res.send({ message: `All Authorising data were deleted successfully!` });
    });
};