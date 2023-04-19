import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menus from "../shared/content";

const SideBar = (props) => {

    const active = props.active;
    const name = props.name;

    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    return (
        <aside className="sticky top-0 h-screen">
            <div className={`${open ? 'w-72' : 'w-24'} duration-300 h-screen p-6 pt-10 bg-green-900`}>
                <img src="/assets/admin/Control.png" alt=""
                    className={`absolute cursor-pointer rounded-full
                -right-2.5 top-14 w-6 border-2 border-dark-purple ${!open && 'rotate-180'}`}
                    onClick={() => setOpen(!open)} />
                <div className="flex gap-x-4 items-center">
                    <img src="/assets/logo.png" alt="" className={`cursor-pointer duration-500 w-20`} />
                    <h1 className={`text-white origin-left font-medium text-xl duration-300
                ${!open && "scale-0"}`}>Welcome, {name ? name : "Student"}</h1>
                </div>
                <ul className="pt-20">
                    {Menus.map((menu, index) =>
                    (
                        <div>
                            <li key={index}
                                onClick={() => navigate(menu.path)}
                                className={`text-gray-300 text-sm flex items-center 
                        gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                        ${menu.gap ? "mt-9" : "mt-2"} ${index === active && 'bg-light-white'}`}>
                                <img src={`/assets/admin/${menu.src}.png`} alt="" className="w-8 bg-white p-1 rounded-md" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;