import React, { useState } from "react";
import SideBar from "./Sidebar/SideBar";

function AddNewStudent() {

    const [data, setData] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        off_email: "",
        rollno: "",
        enr_program: "",
        cur_semester: "",
        batch: 0,
        institute: "",
    });

    const [password, setPassword] = useState("");

    const { first_name,
        middle_name,
        last_name,
        off_email,
        rollno,
        enr_program,
        cur_semester,
        batch,
        institute } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }

    const passHandler = e => {

        setPassword(e.target.value);

    }

    const submitHandler = async e => {
        e.preventDefault();
        // console.log(data);
        // console.log(data['username'][0]);
        console.log(data)
        // const userid = data;

        await fetch(`http://127.0.0.1:8000/api/auth/`,
            {
                method: 'POST',
                body: JSON.stringify({ "id": rollno, "password": password, "role": "student", "email": off_email }),
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(async resData => {
                // Do something with the response data
                console.log(resData);
                await fetch(`http://127.0.0.1:8000/api/stud/`,
                    {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: { "Content-Type": "application/json" }
                    })
                    .then(response => response.json())
                    .then(resData => {
                        // Do something with the response data
                        console.log(resData);
                        alert("Student Added Successfully!!")
                        setData({
                            first_name: "",
                            middle_name: "",
                            last_name: "",
                            off_email: "",
                            rollno: "",
                            enr_program: "",
                            cur_semester: "",
                            batch: 0,
                            institute: "",
                        })
                        setPassword("");

                    })
                    .catch(error => {
                        // Handle any errors that occur during the request
                        console.error(error);
                        alert("Connection Error!!")
                    });
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error(error);
                alert("Connection Error!!")
            });
    }

    return (
        // <div className="flex">
        //     <SideBar active={1} />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-auto">
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-12 px-4 mx-auto">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Add a new Student</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
                        <form onSubmit={submitHandler} className="space-y-8">
                            <div className="flex">
                                <div className="w-1/3 mr-10">
                                    <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                                    <input type="text" name="first_name" value={first_name} onChange={changeHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter First Name" required />
                                </div>
                                <div className="w-1/3 mr-10">
                                    <label for="mname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Middle Name</label>
                                    <input type="text" name="middle_name" value={middle_name} onChange={changeHandler} id="mname" className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Middle Name" />
                                </div>
                                <div className="w-1/3">
                                    <label for="lname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                                    <input type="text" name="last_name" value={last_name} onChange={changeHandler} id="lname" className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Last Name" required />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2 mr-24">
                                    <label for="rollno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Roll Number</label>
                                    <input type="text" name="rollno" value={rollno} onChange={changeHandler} id="rollno" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter New Roll Number" required />
                                </div>
                                <div className="w-1/2">
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Official Email</label>
                                    <input type="email" name="off_email" value={off_email} onChange={changeHandler} id="off_email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Official Email ID" required />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/3 mr-10">
                                    <label for="enr_prog" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enrolled in Program</label>
                                    <input type="text" name="enr_program" value={enr_program} onChange={changeHandler} id="enr_prog" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter the program enrolled" required />
                                </div>
                                <div className="w-1/3 mr-10">
                                    <label for="cur_sem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Current Semester</label>
                                    <input type="text" name="cur_semester" value={cur_semester} onChange={changeHandler} id="cur_sem" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter the Current Semester" required />
                                </div>
                                <div className="w-1/3">
                                    <label for="batch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Batch</label>
                                    <input type="number" name="batch" value={batch} onChange={changeHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Year of Joining" required />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2 mr-24">
                                    <label for="institute" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Institute</label>
                                    <input type="text" name="institute" value={institute} onChange={changeHandler} id="institute" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter the Registered Institute" required />
                                </div>
                                <div className="w-1/2">
                                    <label for="temp_pass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Temporary Password</label>
                                    <input type="password" name="password" value={password} onChange={passHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter the temporary password" required />
                                </div>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add Student</button>
                        </form>
                    </div>
                </section>
            </div>
        // </div>
    );

}

export default AddNewStudent;