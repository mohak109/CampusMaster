const sql = require("./db.js");

const CourseDetails = function (courdet) {

    this.course_code = courdet.course_code;
    this.rollno = courdet.rollno;
    this.grade_id = courdet.grade_id;
    this.semester = courdet.semester;

};

CourseDetails.create = (newCourDet, result) => {
    sql.query("INSERT INTO studenrolledcour SET ?", newCourDet, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created CourseDetails: ", { id: res.insertid, ...newCourDet });
        result(null, { id: res.insertid, ...newCourDet });
    });
};

CourseDetails.getNonReg = (id, result) => {
    let query = `select courses.* from courses left join (select * from studenrolledcour where rollno = "${id}")`;
    query += `as T2 on courses.course_code = T2.course_code where T2.course_code is null;`;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("unregistered courses: ", res);
        result(null, res);
    });
};

CourseDetails.getReg = (id, result) => {
    let query = `select courses.* from courses left join (select * from studenrolledcour where rollno = "${id}")`;
    query += `as T2 on courses.course_code = T2.course_code where T2.course_code is not null;`;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("registered courses: ", res);
        result(null, res);
    });
};

CourseDetails.remove = (newCourDet, result) => {
    let query = `Delete FROM studenrolledcour where course_code = "${newCourDet.course_code}" and rollno = "${newCourDet.rollno}"`;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} registered courses`);
        result(null, res);
    });
};

module.exports = CourseDetails;