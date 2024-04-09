import React from 'react';
import { Outlet } from "react-router-dom"
import Navbar from '../common/navbar';
import Footer from '../common/Footer';
import { Tooltip } from 'react-tooltip';


const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Tooltip id="my-tooltip" className='z-50' />
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;