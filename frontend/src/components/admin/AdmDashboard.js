import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AdmDashboard = () => {


    return (
        // <div className="flex">
        //     <SideBar active={0} />
        <div className="px-32 text-xl font-semibold flex-1 h-screen overflow-auto">

            <div className="flex flex-col md:flex-row pt-10">
                <section>
                    <div id="main" className="main-content flex-1  mt-12 md:mt-2 pb-24 md:pb-5">
                        <div className=" ">
                            <div className="rounded-t-2xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                                <h1 className="font-bold pl-2">Summary</h1>
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                                {/* <!--Metric Card--> */}
                                <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                                    <div className="flex flex-row items-center">
                                        <div className="flex-1 text-right md:text-center">
                                            <h2 className="font-bold uppercase text-gray-600">Total Students</h2>
                                            <p className="font-bold text-3xl">120 <span className="text-green-500"></span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/Metric Card--> */}
                            </div>
                            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                                {/* <!--Metric Card--> */}
                                <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                                    <div className="flex flex-row items-center">
                                        <div className="flex-1 text-right md:text-center">
                                            <h2 className="font-bold uppercase text-gray-600">Total Faculty Members</h2>
                                            <p className="font-bold text-3xl">249 <span className="text-pink-500"></span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/Metric Card--> */}
                            </div>
                            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                                {/* <!--Metric Card--> */}
                                <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                                    <div className="flex flex-row items-center">
                                        <div className="flex-1 text-right md:text-center">
                                            <h2 className="font-bold uppercase text-gray-600">Total Users</h2>
                                            <p className="font-bold text-3xl">2 <span className="text-yellow-600"></span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/Metric Card--> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>

        // </div>
    );

}


export default AdmDashboard;