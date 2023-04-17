import React, { useState } from "react";
import SideBar from "./Sidebar/SideBar";
// import Menus from "./Sidebar/content";
import { Routes, Route } from "react-router-dom";
import ViewStud from "./ViewStudents";

const AdmDashboard = () => {



    return (
        <div className="flex">

            <SideBar active={0} />

            <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                <h1>Welcome to Admin Dashboard</h1>
            </div>

        </div>
    );

}


export default AdmDashboard;