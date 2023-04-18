import React from "react";
import { useParams } from "react-router-dom";
import Display from "./shared/display";
import SideBar from "./Sidebar/SideBar";


function Homepage() {

    const { url } = useParams();

    const filteredData = Display.filter((item) => item.url === url);
    console.log(filteredData);

    return (
        <div className="flex">
            <SideBar active={filteredData[0].active} />
            {filteredData[0].element}
        </div>
    );
}

export default Homepage;