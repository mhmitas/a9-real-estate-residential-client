import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const TestNavbar = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <img src={user?.photoURL} alt="img" />
        </div>
    );
};

export default TestNavbar;