module.exports = app => {
    const facs = require("../controllers/fac.controller.js");
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", facs.create);

    // Retrieve all Tutorials
    router.get("/", facs.findAll);

    // Retrieve a single Tutorial with id
    router.get("/fetch", facs.findOne);

    // Delete all Tutorials
    router.delete("/delete", facs.delete);

    app.use('/api/fac', router);
};