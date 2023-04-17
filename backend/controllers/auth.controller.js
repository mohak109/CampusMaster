const Authentication = require("../models/auth.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Tutorial
    const auth = new Authentication({
        id: req.body.id,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });

    // Save Tutorial in the database
    Authentication.create(auth, (err, data) => {
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

    Authentication.getAll(title, (err, data) => {
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
        Authentication.findById(req.query.id, (err, data) => {
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
        Authentication.findByEmail(req.query.email, (err, data) => {
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

// // Update a Tutorial identified by the id in the request
// exports.update = (req, res) => {
//     // Validate Request
//     if (!req.body) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//     }

//     console.log(req.body);

//     Tutorial.updateById(
//         req.query.id,
//         new Tutorial(req.body),
//         (err, data) => {
//             if (err) {
//                 if (err.kind === "not_found") {
//                     res.status(404).send({
//                         message: `Not found Tutorial with id ${req.query.id}.`
//                     });
//                 } else {
//                     res.status(500).send({
//                         message: "Error updating Tutorial with id " + req.query.id
//                     });
//                 }
//             } else res.send(data);
//         }
//     );
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//     Tutorial.remove(req.query.id, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Tutorial with id ${req.query.id}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Could not delete Tutorial with id " + req.query.id
//                 });
//             }
//         } else res.send({ message: `Tutorial was deleted successfully!` });
//     });
// };

// Delete all Tutorials from the database.
exports.delete = (req, res) => {
    const title = req.query.title;
    Authentication.remove(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all data."
            });
        else res.send({ message: `All Authorising data were deleted successfully!` });
    });
};