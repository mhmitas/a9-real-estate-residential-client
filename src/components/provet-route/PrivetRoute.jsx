import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router-dom'

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='text-5xl absolute top-1/2 left-1/2 text-primary'><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    // return <h3>jekhan theke esecho abar cole jao. login kore asba</h3>
    return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;