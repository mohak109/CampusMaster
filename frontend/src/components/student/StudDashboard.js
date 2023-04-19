import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Attendance from './New folder/attendance';
// import RegisteredCourses from './New folder/registeredCourses';
// import CourseRegistration from './New folder/RegisterForCourses';
// import { Route, Routes } from 'react-router-dom';


const StuDashboard = () => {

  // Render dashboard content
  return (
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
                      <h2 className="font-bold uppercase text-gray-600 mb-3">Total Registered Courses</h2>
                      <p className="font-bold text-2xl">3 <span className="text-green-500"></span></p>
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
                      <h2 className="font-bold uppercase text-gray-600 mb03">Assignments Due</h2>
                      <p className="font-bold text-2xl">3 <span className="text-pink-500"></span></p>
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
                      <h2 className="font-bold uppercase text-gray-600 mb-3">To do List</h2>
                      <p className="font-bold text-xl mb-1">SE Assignment 1 <span className="text-yellow-600"></span></p>
                      <p className="font-bold text-xl mb-1">SE Report <span className="text-yellow-600"></span></p>
                      <p className="font-bold text-xl mb-1">React Project <span className="text-yellow-600"></span></p>
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
  )
};

export default StuDashboard;
