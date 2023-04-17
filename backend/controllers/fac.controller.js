const Faculty = require("../models/fac.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Tutorial
    const fac = new Faculty({
        fac_id: req.body.fac_id,
        f_name: req.body.first_name,
        m_name: req.body.middle_name ? req.body.middle_name : "",
        l_name: req.body.last_name,
        email: req.body.off_email,
        specialization: req.body.specialization,
        designation: req.body.designation,
        salary: req.body.salary,
        institute: req.body.institute,
        branch: req.body.branch
    });

    // Save Tutorial in the database
    Faculty.create(fac, (err, data) => {
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

    Faculty.getAll(title, (err, data) => {
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
        Faculty.findById(req.query.id, (err, data) => {
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
        Faculty.findByEmail(req.query.email, (err, data) => {
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
    Faculty.remove(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all data."
            });
        else res.send({ message: `All Faculty data were deleted successfully!` });
    });
};