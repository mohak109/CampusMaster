const sql = require("./db.js");

// constructor
const Authentication = function (auth) {
    this.id = auth.id;
    this.email = auth.email;
    this.password = auth.password;
    this.role = auth.role;
};

Authentication.create = (newAuth, result) => {
    sql.query("INSERT INTO auths SET ?", newAuth, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created authentication: ", { id: res.insertid, ...newAuth });
        result(null, { id: res.insertid, ...newAuth });
    });
};

Authentication.findById = (id, result) => {
    sql.query(`SELECT * FROM auths WHERE id = "${id}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found auth: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Authentication with the id
        result({ kind: "not_found" }, null);
    });
};

Authentication.findByEmail = (email, result) => {
    sql.query(`SELECT * FROM auths WHERE email = "${email}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found auth: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Authentication with the id
        result({ kind: "not_found" }, null);
    });
};

Authentication.getAll = (title, result) => {
    let query = "SELECT * FROM auths";

    if (title) {
        query += ` WHERE title LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("auths: ", res);
        result(null, res);
    });
};

// Authentication.updateById = (id, tutorial, result) => {
//     sql.query(
//         "UPDATE auths SET title = ?, description = ?, published = ? WHERE id = ?",
//         [tutorial.title, tutorial.description, tutorial.published, id],
//         (err, res) => {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//                 return;
//             }

//             if (res.affectedRows == 0) {
//                 // not found Authentication with the id
//                 result({ kind: "not_found" }, null);
//                 return;
//             }

//             console.log("updated tutorial: ", { id: id, ...tutorial });
//             result(null, { id: id, ...tutorial });
//         }
//     );
// };

// Authentication.remove = (id, result) => {
//     sql.query("DELETE FROM auths WHERE id = ?", id, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         if (res.affectedRows == 0) {
//             // not found Authentication with the id
//             result({ kind: "not_found" }, null);
//             return;
//         }

//         console.log("deleted tutorial with id: ", id);
//         result(null, res);
//     });
// };

Authentication.removeAll = result => {
    sql.query("DELETE FROM auths", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} auths`);
        result(null, res);
    });
};

module.exports = Authentication;