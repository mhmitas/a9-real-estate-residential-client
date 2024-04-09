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
        <div className='my-16 space-y-6'>
            <div className="card card-side bg-base-200 px-6 py-10 shadow-xl mx-auto max-w-xl">
                <figure className='w-1/3'>
                    <img src={user?.photoURL ? user.photoURL : default_avatur} alt={user?.displayName} className='rounded-full w-full' />
                </figure>
                {/* // card body */}
                <div className="card-body">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p><strong>Email:</strong> {user?.email}</p>
                    <br />
                    <div className="card-actions justify-end">
                        <Link >
                            <button className="btn p-4 btn-primary btn-outline"><FaEdit></FaEdit>Edit Profile</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Editing form */}
            <div className="card bg-base-200 shadow-xl mx-auto w-96">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="*:w-full space-y-6 p-10">
                    <input
                        {...register("username")}
                        type="text"
                        required
                        className='input input-primary'
                        name="name"
                        placeholder='Username'
                    />
                    <input
                        {...register("photoURL")}
                        type="text"
                        required
                        className='input input-primary'
                        name="name"
                        placeholder='Photo URL'
                    />
                    <button className='w-full btn btn-primary'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;