import React from "react";
import SideBar from "./Sidebar/SideBar";

const AcadCal = () => {


    return (
        <div className="flex">
            <SideBar active={4} />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-auto">
                <div className="flex justify-center items-center h-screen">
                    <embed src="assets/acadcal.pdf" width="100%" height="100%" />
                </div>
            </div>
        </div>
    );
}

export default AcadCal;