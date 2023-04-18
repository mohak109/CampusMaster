import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function LoginForm() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const { username, password } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }

    const submitHandler = async e => {
        // navigate("admdash");
        e.preventDefault();
        // console.log(data);
        // console.log(data['username'][0]);
        const userid = data['username'][0];
        console.log(userid.includes("@"));

        if (userid.includes("@")) {
            await fetch(`http://127.0.0.1:8000/api/auth/fetch?email=${userid}`,
                {
                    method: 'GET'
                })
                .then(response => response.json())
                .then(resData => {
                    // Do something with the response data
                    if (!resData['message']) {
                        if (data['password'][0] === resData['password']) {

                            if (resData['role'] === "student") {
                                navigate("/studash");
                            } else if (resData['role'] === "faculty") {
                                navigate("/facdash");
                            } else if (resData['role'] === "admin") {
                                navigate("/admdash");
                            }
                            // navigate("home");
                        }
                        else {
                            alert("Invalid UserId or Password!!")
                        }
                    }
                    else {
                        alert("Invalid UserId or Password!!")
                    }
                })
                .catch(error => {
                    // Handle any errors that occur during the request
                    console.error(error);
                    alert("Connection Error!!")
                });
        } else {
            await fetch(`http://127.0.0.1:8000/api/auth/fetch?id=${userid}`,
                {
                    method: 'GET'
                })
                .then(response => response.json())
                .then(resData => {
                    // Do something with the response data
                    if (!resData['message']) {
                        if (data['password'][0] === resData['password']) {

                            if (resData['role'] === "student") {
                                navigate("studash");
                            } else if (resData['role'] === "faculty") {
                                navigate("facdash");
                            } else if (resData['role'] === "admin") {
                                navigate("admdash");
                            }
                            // history.push("/abc");
                        }
                        else {
                            alert("Invalid UserId or Password!!")
                        }
                    }
                    else {
                        alert("Invalid UserId or Password!!")
                    }
                })
                .catch(error => {
                    // Handle any errors that occur during the request
                    console.error(error);
                    alert("Connection Error!!")
                });
        }

    }

    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-blue-500">
                        Sign in
                    </h1>
                    <form className="mt-14" onSubmit={submitHandler}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800 text-left"
                            >
                                Email
                            </label>
                            <input
                                type="text" onChange={changeHandler} name="username" value={username}
                                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800 text-left"
                            >
                                Password
                            </label>
                            <input
                                type="password" onChange={changeHandler} name="password" value={password}
                                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                Login
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginForm;