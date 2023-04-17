module.exports = app => {
    const studs = require("../controllers/stud.controller.js");
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", studs.create);

    // Retrieve all Tutorials
    router.get("/", studs.findAll);

    // Retrieve a single Tutorial with id
    router.get("/fetch", studs.findOne);

    // Delete all Tutorials
    router.delete("/delete", studs.delete);

    app.use('/api/stud', router);
};