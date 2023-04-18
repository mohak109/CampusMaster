import React from "react";

const HonorsList = () => {


    return (
        // <div className="flex">
        //     <SideBar active={5} />
            <div className="px-7 text-2xl font-semibold flex-1 h-screen overflow-auto">
                <div className="flex justify-center items-center h-screen">
                    <embed src="/assets/honors.pdf" width="100%" height="90%" />
                </div>
            </div>
        // </div>
    );
}

export default HonorsList;