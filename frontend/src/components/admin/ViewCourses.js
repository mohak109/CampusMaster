import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar/SideBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ViewCour() {

    const navigate = useNavigate();

    const [cour, setCour] = useState([]);

    useEffect(() => async () => {

        // console.log(data);
        // console.log(data['username'][0]);
        // const userid = data['username'][0];
        // console.log(userid.includes("@"));

        // if (userid.includes("@")) {
        await axios.get(`http://127.0.0.1:8000/api/cour/`,
        )
            // .then(response => response.json())
            .then(resData => {
                // Do something with the response data
                // if (mounted) {
                setCour(resData.data);
                // }
                console.log(resData.data);
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error(error);
                alert("Connection Error!!")
            });

        // return () => mounted = false;
        // }

        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
    }, []);

    const deleteHandler = async (id) => {
        await fetch(`http://localhost:8000/api/cour/delete?title=${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(async resData => {
                console.log(resData);
                alert("Deleted Successfully!!");
                window.location.reload(false);
            })
            .catch(error => { console.error(error); alert("Connection Error!!") });
    }

    return (
        <div className="flex">
            <SideBar active={3} />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-auto">
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="flex py-3 pl-2">
                            <div className="relative max-w-xs">
                                <label htmlFor="hs-table-search" className="sr-only">
                                    Search
                                </label>
                                <input
                                    type="text"
                                    name="hs-table-search"
                                    id="hs-table-search"
                                    className="block w-full p-3 px-5 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    placeholder="Search..."
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg
                                        className="h-3.5 w-3.5 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-96">
                                <button onClick={() => { navigate("/addcour") }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mb-2 my-1 text-base">
                                    Add New Course
                                </button>
                            </div>
                        </div>

                        <div className="p-1.5 w-full inline-block align-middle">
                            <div className="overflow-hidden border rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Course Code
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Course Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Credits
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {cour.map((item, key) => (
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {item.course_code}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {item.course_name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {item.credits}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <a
                                                        className="text-green-400 hover:text-red-700 cursor-pointer"
                                                        onClick={() => { deleteHandler(item.course_code) }}
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCour;