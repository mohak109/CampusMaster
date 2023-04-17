const express = require("express");
const cors = require("cors");

const app = express();
const http = require('http').Server(express);

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to CampusMaster application." });
});

require("./routes/auth.routes.js")(app);
require("./routes/stud.routes.js")(app);
require("./routes/fac.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => {
    console.log("Welcome to CampusMaster application.\n" + `Server is running on port ${PORT}.`);
});