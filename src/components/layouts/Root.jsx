<<<<<<< HEAD
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

const Root = () => {
    return (
        <div className='bg-[#0B0F19]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
            <Footer></Footer>
            
        </div>
    );
};

=======
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

const Root = () => {
    return (
        <div className='bg-[#0B0F19]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

>>>>>>> 25d506a525cdfdc85479c7f7b3345d9b8274bac4
export default Root;