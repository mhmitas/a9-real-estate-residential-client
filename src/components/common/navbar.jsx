import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const routes = [
        { name: "Home", path: '/', id: 1 },
        { name: "Home", path: '/', id: 2 },
        { name: "Home", path: '/', id: 3 },
    ]

    return (
        <nav>
            <div className="navbar bg-base-100 shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {routes.map(route => <li key={route.id}><NavLink to={route.path}>{route.name}</NavLink></li>)}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl font-bold">Reindeer</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {routes.map(route => <li key={route.id}><NavLink to={route.path}>{route.name}</NavLink></li>)}
                    </ul>
                </div>
                <div className="navbar-end font-bold">
                    <Link to="/login" className="btn btn-ghost ">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;