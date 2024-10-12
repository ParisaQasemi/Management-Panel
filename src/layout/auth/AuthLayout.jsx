import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/auth/Login';

const AuthLayout = () => {
    return (
        <div>
            <Routes>
                <Route path='/Login' element={<Login />}/>
            </Routes>
        </div>
    );
}

export default AuthLayout;
