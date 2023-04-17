const sql = require("./db.js");

// constructor
const Student = function (stud) {
    this.rollno = stud.rollno;
    this.first_name = stud.f_name;
    this.middle_name = stud.m_name;
    this.last_name = stud.l_name;
    this.off_email = stud.email;
    this.enr_program = stud.program;
    this.cur_semester = stud.semester;
    this.batch = stud.batch;
    this.institute = stud.institute;

};

Student.create = (newStud, result) => {
    sql.query("INSERT INTO student SET ?", newStud, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created student: ", { id: res.insertid, ...newStud });
        result(null, { id: res.insertid, ...newStud });
    });
};

Student.findById = (id, result) => {
    sql.query(`SELECT * FROM student WHERE rollno = "${rollno}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found stud: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Authentication with the id
        result({ kind: "not_found" }, null);
    });
};

Student.findByEmail = (email, result) => {
    sql.query(`SELECT * FROM student WHERE off_email = "${email}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found student: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Authentication with the id
        result({ kind: "not_found" }, null);
    });
};

Student.getAll = (title, result) => {
    let query = "SELECT * FROM student";

    if (title) {
        query += ` WHERE title LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("students: ", res);
        result(null, res);
    });
};

Student.remove = (title, result) => {
    let query = "Delete FROM student";

    if (title) {
        query += ` WHERE rollno LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} students`);
        result(null, res);
    });
};

module.exports = Student;