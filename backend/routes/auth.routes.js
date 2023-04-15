module.exports = app => {
    const auths = require("../controllers/auth.controller.js");
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", auths.create);

    // Retrieve all Tutorials
    router.get("/", auths.findAll);

    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/fetch", auths.findOne);

    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);

    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);

    // Delete all Tutorials
    router.delete("/", auths.deleteAll);

    app.use('/api/auth', router);
};