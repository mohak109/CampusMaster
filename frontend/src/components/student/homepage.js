import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Display from "./shared/display";
import SideBar from "./Sidebar/SideBar";


function StuHomepage() {

    // const location = useLocation();
    // const id = location.state.id;
    // console.log(id);

    const [name, setName] = useState("");

    // useEffect(() => async () => {
    //     // if (userid.includes("@")) {
    //     await fetch(`http://127.0.0.1:8000/api/stud?title=${id}`,
    //         { method: 'GET' })
    //         .then(response => response.json())
    //         // .then(response => response.json())
    //         .then(resData => {
    //             // Do something with the response data
    //             console.log(resData);
    //             setName(resData[0].first_name+" "+resData[0].last_name)
    //             console.log(name);
    //         })
    //         .catch(error => {
    //             // Handle any errors that occur during the request
    //             console.error(error);
    //             alert("Connection Error!!")
    //         })

    // }, [name]);

    const { url } = useParams();
    const filteredData = Display.filter((item) => item.url === url);
    // console.log(filteredData);

    return (
        <div className="flex">
            <SideBar active={filteredData[0].active} />
            {filteredData[0].element}
        </div>
    );
}

export default StuHomepage;