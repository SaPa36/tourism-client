
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


export default Root;