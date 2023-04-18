module.exports = app => {
    const courdet = require("../controllers/need.controller.js");
    var router = require("express").Router();

    router.get("/nonreg", courdet.findNonReg);

    router.get("/reg", courdet.findReg);

    router.post("/newcour", courdet.create);

    router.delete("/delcour", courdet.delete);

    app.use('/api/courdet', router);
};