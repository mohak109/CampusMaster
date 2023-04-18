import StuDashboard from "../StudDashboard";
import UnRegCour from "../CourseReg";
import RegisCour from "../RegisCour";

const Display = [
    { url: "dash", element: <StuDashboard />, active: 0 },
    // { url: "stud", element: <ViewStud />, active: 1 },
    // { url: "newstud", element: <AddNewStudent />, active: 1 },
    { url: "regiscour", element: <RegisCour />, active: 1 },
    { url: "courreg", element: <UnRegCour />, active: 2 },
    // { url: "newfac", element: <AddNewFaculty />, active: 2 },
    // { url: "cour", element: <ViewCour />, active: 3 },
    // { url: "newcour", element: <AddNewCourse />, active: 3 },
    // { url: "acadcal", element: <AcadCal />, active: 4 },
    // { url: "honors", element: <HonorsList />, active: 5 },
]

export default Display;