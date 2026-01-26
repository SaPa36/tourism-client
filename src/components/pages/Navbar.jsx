import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        toast.success("Logout Successfully");
        logOut()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>

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


            <div className="navbar-end">
                {user ? (
                    <div className="align-middle dropdown dropdown-end">
                        <div className="flex">
                            <div>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://i.ibb.co/cfMZSVw/sapa5.jpg "
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleLogOut} className="ml-3 bg-gradient-to-br from-blue-500 to-teal-400 
                    hover:brightness-110 text-white font-semibold py-2 px-6 rounded-full 
                    transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <NavLink to="/login">
                            <button className="bg-gradient-to-br from-blue-500 to-teal-400 
                    hover:brightness-110 text-white font-semibold py-2 px-6 rounded-full 
                    transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95">Login</button>
                        </NavLink>

                        <NavLink to="/register">
                            <button className="bg-gradient-to-br ml-3 from-blue-500 to-teal-400 
                    hover:brightness-110 text-white font-semibold py-2 px-6 rounded-full 
                    transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95">Register</button>
                        </NavLink>
                    </>




                )}
            </div>
            <Toaster position="top-center" reverseOrder={false} />

        </div >
    );
};

export default Navbar;