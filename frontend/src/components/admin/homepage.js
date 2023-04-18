import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Display from "./shared/display";
import SideBar from "./Sidebar/SideBar";


function AdmHomepage() {

    const location = useLocation();
    const id = location.state.id ? location.state.id : null;
    // console.log(id);

    const [name, setName] = useState("");

    useEffect(() => async () => {
        // if (userid.includes("@")) {
        await fetch(`http://127.0.0.1:8000/api/auth?title=${id}`,
            { method: 'GET' })
            .then(response => response.json())
            // .then(response => response.json())
            .then(resData => {
                // Do something with the response data
                console.log(resData[0].email);
                setName(resData[0].id)
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error(error);
                alert("Connection Error!!")
            })

    }, [name]);

    const { url } = useParams();
    const filteredData = Display.filter((item) => item.url === url);
    // console.log(filteredData);

    return (
        <div className="flex">
            <SideBar active={filteredData[0].active} name={name} />
            {filteredData[0].element}
        </div>
    );
}

export default AdmHomepage;