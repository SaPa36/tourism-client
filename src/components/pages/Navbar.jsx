import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="">All Tourist Spot</NavLink></li>
        <li><NavLink to="">Add Tourist Spot</NavLink></li>
        <li><NavLink to="">My List</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold ">TerraQuest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-x-5 ">
                <NavLink to="/login">
                    <button className="bg-gradient-to-br from-blue-500 to-teal-400 
                    hover:brightness-110 text-white font-semibold py-2 px-6 rounded-full 
                    transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95">
                         Login
                    </button>
                </NavLink>
                <NavLink to="/register">
                    <button className="bg-gradient-to-br from-blue-500 to-teal-400
                     hover:brightness-110 text-white font-semibold py-2 px-6 rounded-full
                      transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95">
                        Register
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;