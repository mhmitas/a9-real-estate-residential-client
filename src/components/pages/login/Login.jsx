import React, { useContext } from 'react';
import ErrorMessageInsideForm from '../../common/error-message/ErrorMessage';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaXTwitter, FaGoogle } from "react-icons/fa6";


const Login = () => {
    const { createUser } = useContext(AuthContext)
    // console.log(authInfo);

    function handleGooleSignIn() {

    }
    function handleTwitterSignIn() {

    }


    return (
        <div>
            <div className='my-10'>
                <h3 className="text-3xl text-center font-bold">Please Login</h3>
                <div className='flex justify-center max-w-md p-10 mx-auto'>
                    <div className='rounded-md bg-base-200 p-8  space-y-6 '>
                        {/* {<ErrorMessageInsideForm></ErrorMessageInsideForm>} */}
                        <form className='*:w-full space-y-6 ' >
                            <input
                                type="text"
                                className='input input-primary'
                                required name="email"
                                placeholder='Email' />
                            <input
                                type="text"
                                className='input input-primary'
                                required name="password"
                                placeholder='Password' />
                            <br />
                            <input
                                type="submit"
                                className='btn btn-primary input-primary'
                                value="Log in" />
                        </form>
                        <p>Don't have an account! Please <Link to="/register" className='link link-primary'>Register</Link></p>
                        <p className='divider'>OR</p>
                        <div className='flex flex-col justify-center gap-2 text-xl'>
                            <button onClick={handleGooleSignIn} className='w-full btn btn-outline' >
                                <FaGoogle className=' text-2xl'></FaGoogle> sign in with google
                            </button>
                            <button onClick={handleTwitterSignIn} className='w-full btn btn-outline' >
                                <FaXTwitter className=' text-2xl'></FaXTwitter> sign in with twitter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;