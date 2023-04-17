const sql = require("./db.js");

// constructor
const Faculty = function (fac) {
    this.fac_id = fac.fac_id;
    this.first_name = fac.f_name;
    this.middle_name = fac.m_name;
    this.last_name = fac.l_name;
    this.off_email = fac.email;
    this.specialization = fac.specialization;
    this.designation = fac.designation;
    this.salary = fac.salary;
    this.institute = fac.institute;
    this.branch = fac.branch;
};

Faculty.create = (newFac, result) => {
    sql.query("INSERT INTO faculty SET ?", newFac, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created faculty: ", { id: res.insertid, ...newFac });
        result(null, { id: res.insertid, ...newFac });
    });
};

Faculty.findById = (id, result) => {
    sql.query(`SELECT * FROM faculty WHERE fac_id = "${fac_id}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found fac: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Authentication with the id
        result({ kind: "not_found" }, null);
    });
};

Faculty.findByEmail = (email, result) => {
    sql.query(`SELECT * FROM faculty WHERE off_email = "${email}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found faculty: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Authentication with the id
        result({ kind: "not_found" }, null);
    });
};

Faculty.getAll = (title, result) => {
    let query = "SELECT * FROM faculty";

    if (title) {
        query += ` WHERE fac_id LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("facultys: ", res);
        result(null, res);
    });
};

Faculty.remove = (title, result) => {
    let query = "Delete FROM faculty";

    if (title) {
        query += ` WHERE fac_id LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} facultys`);
        result(null, res);
    });
};

module.exports = Faculty;