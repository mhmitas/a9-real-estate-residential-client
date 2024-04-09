import React, { useContext, useState } from 'react';
import ErrorMessageInsideForm from '../../common/error-message/ErrorMessage';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaXTwitter, FaGoogle } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'


const Login = () => {
    const { login, googleLogin, setLoading } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(null);

    const location = useLocation()
    // console.log(location);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    function onSubmit(data) {
        const { email, password } = data;
        login(email, password)
            .then(result => {
                setLoginError(null);
                setLoading(false);
                toast.success('Login successful')
                navigate(location.state ? location.state : '/')
            }).catch(error => {
                // console.error(error);
                setLoginError(error.message);
                setLoading(false)
            })
    }

    function handleGooleSignIn() {
        googleLogin()
            .then(result => {
                console.log(result.user);
                setLoading(false)
            }).catch(error => {
                setLoading(false)
                alert(error.message);
            })
    }
    function handleTwitterSignIn() {

    }


    return (
        <div>
            <div className='my-10'>
                <h3 className="text-3xl text-center font-bold my-10">Please Login</h3>
                <div className='max-w-sm mx-auto rounded-md bg-base-200 p-12 space-y-6 '>
                    {loginError && <ErrorMessageInsideForm text2="Invalid email or password"></ErrorMessageInsideForm>}
                    <form onSubmit={handleSubmit(onSubmit)} className='*:w-full space-y-6 ' >
                        <input
                            {...register("email")}
                            type="text"
                            className='input input-primary'
                            required name="email"
                            placeholder='Email'
                        />
                        <input
                            {...register("password")}
                            type="text"
                            className='input input-primary'
                            required name="password"
                            placeholder='Password'
                        />
                        <input
                            type="submit"
                            className='btn btn-primary input-primary'
                            value="Log in"
                        />
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
    );
};

export default Login;