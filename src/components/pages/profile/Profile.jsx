import { AuthContext } from '../../../provider/AuthProvider';
import default_avatur from '../../../assets/profile-avatur.jpeg';
import React, { useContext, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Profile = () => {
    const { user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="w-96 flex flex-col bg-base-200 mx-auto mt-10 p-6 items-center">
            {/* // card body */}
            <div className="w-full flex flex-col items-center gap-3">
                <figure className='w-1/3'>
                    <img src={user?.photoURL ? user.photoURL : default_avatur} alt={user?.displayName} className='rounded-full w-full' />
                </figure>
                <div className=''>
                    <h2 className=""><strong>User:</strong> {user?.displayName}</h2>
                    <p><strong>Email:</strong> {user?.email}</p>
                    <br />
                    <div className="">
                        <Link >
                            <button className="btn p-4 btn-primary btn-outline"><FaEdit></FaEdit>Edit Profile</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Editing form */}
            <div className="w-full p-10 hidden">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3 w-full">
                    <input
                        {...register("username")}
                        type="text"
                        required
                        className='input input-primary w-full'
                        name="name"
                        placeholder='Username'
                    />
                    <input
                        {...register("photoURL")}
                        type="text"
                        required
                        className='input input-primary w-full'
                        name="name"
                        placeholder='Photo URL'
                    />
                    <button className=' mx-auto btn btn-primary'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;