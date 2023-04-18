import AdmDashboard from "../AdmDashboard";
import ViewCour from "../ViewCourses";
import ViewFac from "../ViewFaculty";
import ViewStud from "../ViewStudents";
import AddNewStudent from "../AddStudent";
import AddNewFaculty from "../AddFaculty";
import AcadCal from "../ViewAcadCal";
import HonorsList from "../viewHonors";
import AddNewCourse from "../AddCourse";

const Display = [
    { url: "dash", element: <AdmDashboard />, active: 0 },
    { url: "stud", element: <ViewStud />, active: 1 },
    { url: "newstud", element: <AddNewStudent />, active: 1 },
    { url: "fac", element: <ViewFac />, active: 2 },
    { url: "newfac", element: <AddNewFaculty />, active: 2 },
    { url: "cour", element: <ViewCour />, active: 3 },
    { url: "newcour", element: <AddNewCourse />, active: 3 },
    { url: "acadcal", element: <AcadCal />, active: 4 },
    { url: "honors", element: <HonorsList />, active: 5 },
    // { url: "/dash", element: <AdmDashboard />, active: 0 },
    // { url: "/dash", element: <AdmDashboard />, active: 0 },
    // { title: "Inbox", src: "Chat" },
    // { title: "Students", src: "graduated", path: "/viewstud", gap: true },
    // { title: "Faculty", src: "chair", path: "/viewfac" },
    // { title: "Courses", src: "homework", path: "/viewcour" },
    // { title: "Academic Calendar", src: "calendar", path: "/viewacadcal" },
    // { title: "Honors List Current", src: "list", path: "/viewhonors" },
    // { title: "Sign Out", src: "logout", path: "/", gap: true },
]

export default Display;