import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='p-8 mt-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;