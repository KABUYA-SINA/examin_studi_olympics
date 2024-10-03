import React from 'react';
import { Outlet } from 'react-router-dom';
import Signup from './auth/Signup';

const userAuth = () => {
    let token = localStorage.getItem('TOKEN')
    return token
}
function ProtectedRoutes() {
    const isAuth = userAuth();
    return isAuth ? <Outlet /> : <Signup />
}

export default ProtectedRoutes