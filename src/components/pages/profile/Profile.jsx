import { AuthContext } from '../../../provider/AuthProvider';
import default_avatur from '../../../assets/profile-avatur.jpeg';
import React, { useContext, useState } from 'react';
import { FaEdit } from "react-icons/fa";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false)
    const { user } = useContext(AuthContext)

    function handleFormsubmit() { }

    return (
        <div className="w-96 flex flex-col bg-base-200 mx-auto mt-10 p-6 items-center">
            {/* // card body */}
            <div className="w-full flex flex-col items-center gap-3">
                <figure className='w-1/3'>
                    <img src={user?.photoURL ? user.photoURL : default_avatur} alt={user?.displayName} className='rounded-full w-full' />
                </figure>
                {/* card body */}
                <div className={`p-4 ${isEditing ? "hidden" : ''}`}>
                    <h2 className=""><strong>User:</strong> {user?.displayName}</h2>
                    <p><strong>Email:</strong> {user?.email}</p>
                    <br />
                    <div className="">
                        <button onClick={() => setIsEditing(true)} className="btn btn-primary btn-outline"><FaEdit></FaEdit>Edit Profile</button>
                    </div>
                </div>
                {/* // update form */}
                <div className={`w-full p-10 pt-4 ${isEditing ? "" : 'hidden'}`}>
                    <div className='flex justify-end '>
                        <button onClick={() => setIsEditing(false)} className='text-2xl btn hover:btn-error mb-1'>×</button>
                    </div>
                    <form
                        className="flex flex-col gap-3 w-full">
                        <input
                            type="text"
                            className='input input-primary w-full'
                            name="name"
                            placeholder='Username'
                        />
                        <input
                            type="text"
                            className='input input-primary w-full'
                            name="name"
                            placeholder='Photo URL'
                        />
                        {/* <button onClick={() => setIsEditing(false)} className=' mx-auto btn btn-primary'>Update</button> */}
                        <button className=' mx-auto btn btn-primary'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;