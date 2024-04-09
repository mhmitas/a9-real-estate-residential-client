import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { auth } from '../../firebase/firbase.config';
import { signOut } from 'firebase/auth';
import default_avatur from '../../assets/profile-avatur.jpeg';



const Navbar = () => {
    const { user, loading } = useContext(AuthContext)
    // console.log(user);

    const routes = [
        { name: "Home", path: '/', id: 1 },
        { name: "About Us", path: '/about-us', id: 2 },
        // { name: "Home", path: '/', id: 3 },
    ]

    function handleLogOut() {
        signOut(auth)
            .then(() => {
                console.log('// Sign-out successful.');
            }).catch((error) => {
                console.error(error);
            });
    }


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
                <div className="navbar-end">
                    {
                        loading ?
                            <span className="loading loading-bars text-primary"></span>
                            // <p>Loading...</p>
                            :
                            <div>
                                {
                                    // if user? log out : login
                                    user ?
                                        <div className='flex gap-4 items-center'>
                                            <div className="dropdown dropdown-end">
                                                <div
                                                    data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName ? user?.displayName : user.email}
                                                    tabIndex={0}
                                                    role="button"
                                                    className="btn btn-ghost btn-circle avatar"
                                                >
                                                    <div className="w-10 rounded-full">
                                                        {
                                                            user.photoURL ?
                                                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                                                :
                                                                <img alt="Tailwind CSS Navbar component" src={default_avatur} />
                                                        }
                                                    </div>
                                                </div>
                                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 w-52">
                                                    <li>
                                                        <Link to="/profile" className="justify-between">Profile</Link>
                                                    </li>
                                                    {/* <li><a>Settings</a></li> */}
                                                    <li><button onClick={handleLogOut}>Log out</button></li>
                                                </ul>
                                            </div>
                                        </div>
                                        :
                                        <Link to="/login" className="btn btn-ghost ">Login</Link>
                                }
                            </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
