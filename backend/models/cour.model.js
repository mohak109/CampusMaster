const sql = require("./db.js");

// constructor
const Course = function (cour) {
    this.course_code = cour.course_code;
    this.credits = cour.credits;
    this.course_name = cour.course_name;
    this.course_desc = cour.course_desc;
};

Course.create = (newCour, result) => {
    sql.query("INSERT INTO courses SET ?", newCour, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created courses: ", { id: res.insertid, ...newCour });
        result(null, { id: res.insertid, ...newCour });
    });
};

Course.findById = (id, result) => {
    sql.query(`SELECT * FROM courses WHERE course_code = "${course_code}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found cour: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Authentication with the id
        result({ kind: "not_found" }, null);
    });
};

Course.getAll = (title, result) => {
    let query = "SELECT * FROM courses";

    if (title) {
        query += ` WHERE course_code LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("courses: ", res);
        result(null, res);
    });
};

Course.remove = (title, result) => {
    let query = "Delete FROM courses";

    if (title) {
        query += ` WHERE course_code LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} courses`);
        result(null, res);
    });
};

module.exports = Course;