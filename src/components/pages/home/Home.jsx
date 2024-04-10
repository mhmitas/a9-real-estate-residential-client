import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='p-8 mt-4'>
                <Outlet></Outlet>
            </div>
            <Helmet>
                <title>Reindeer - Home</title>
            </Helmet>
        </div>
    );
};

export default Home;