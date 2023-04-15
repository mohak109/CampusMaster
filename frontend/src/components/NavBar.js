// import React, { Component } from 'react';
// // import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
// // import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// class Header extends Component {
//     render() {
//         return (
//             <nav className="bg-gray-800">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-16">
//                         <div className="flex items-center">
//                             <div className="flex-shrink-0">
//                                 <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
//                             </div>
//                             <div className="hidden md:block">
//                                 <div className="ml-10 flex items-baseline space-x-4">
//                                     <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>

//                                     <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>

//                                     <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>

//                                     <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         );
//     }
// }

// export default Header;

import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="w-72 h-screen">Sidebar</div>
                <div className="p-7 text-2xl font-semi-bold
                ">
                    <h1>Home Page</h1>
                </div>
            </div>
        )
    };
}
