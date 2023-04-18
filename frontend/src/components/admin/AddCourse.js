import React, { useState } from "react";
import SideBar from "./Sidebar/SideBar";

function AddNewCourse() {

    const [data, setData] = useState({
        course_code: "",
        course_name: "",
        course_desc: "",
        credits: 0
    });

    const { course_code,
        course_name,
        course_desc,
        credits } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }

    const submitHandler = async e => {
        e.preventDefault();
        // console.log(data);
        // console.log(data['username'][0]);
        const userid = data;


        await fetch(`http://127.0.0.1:8000/api/cour/`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(resData => {
                // Do something with the response data
                console.log(resData);
                alert("Course Added Successfully!!")
                setData({
                    course_code: "",
                    course_name: "",
                    course_desc: "",
                    credits: 0
                })
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error(error);
                alert("Connection Error!!")
            });

    }

    return (
        // <div className="flex">
        //     <SideBar active={3} />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-auto">
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-12 px-4 mx-auto">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Add a new Course</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
                        <form onSubmit={submitHandler} className="space-y-8">
                            <div className="flex">
                                <div className="w-1/3 mr-10">
                                    <label htmlFor="course_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course Code</label>
                                    <input type="text" name="course_code" value={course_code} onChange={changeHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter the Course Code" required />
                                </div>
                                <div className="w-1/3 mr-10">
                                    <label for="course_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course Name</label>
                                    <input type="text" name="course_name" value={course_name} onChange={changeHandler} id="course_name" className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter the Course Name" />
                                </div>
                                <div className="w-1/3">
                                    <label for="credits" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Credits</label>
                                    <input type="number" name="credits" value={credits} onChange={changeHandler} id="credits" className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter the Course Credits" required />
                                </div>
                            </div>
                            <div className="">
                                <label for="course_desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course Description</label>
                                <input type="text" name="course_desc" value={course_desc} onChange={changeHandler} id="course_desc" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Course Desciption" required />
                            </div>

                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add Course</button>
                        </form>
                    </div>
                </section>
            </div>
        // </div>
    );

}

export default AddNewCourse;