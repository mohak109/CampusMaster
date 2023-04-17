module.exports = app => {
    const auths = require("../controllers/auth.controller.js");
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", auths.create);

    // Retrieve all Tutorials
    router.get("/", auths.findAll);

    // Retrieve a single Tutorial with id
    router.get("/fetch", auths.findOne);

    // Delete all Tutorials
    router.delete("/delete", auths.delete);

    app.use('/api/auth', router);
};