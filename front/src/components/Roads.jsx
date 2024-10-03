import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Tickets from "../pages/Tickets";
import Single from '../pages/Single';
import ConnectPages  from '../pages/Connect';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import SignupAdm from '../pages/admin/Singup';
import LoginAdm from '../pages/admin/Login';
import AdmHomepage from '../pages/admin/auth/Home';
import ProtectedRoutes from '../pages/ProtectedRoutes';
import Online from '../pages/connecting/Online';
import BasketPage from '../pages/BasketPage';

const Roads = () => {
     const location = useLocation();
    return (
        <AnimatePresence >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path='/tickets' element={<Tickets />} />
                <Route path='*' element={<Error />} />
                <Route path='/Single/:id' element={<Single />} />
                <Route path='/connect' element={<ConnectPages />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>}/>
                <Route path={process.env.REACT_APP_SIGN_ADM} element={<SignupAdm/>}/>
                <Route path={process.env.REACT_APP_LOG_ADM} element={<LoginAdm/>}/>
                <Route element={<ProtectedRoutes />}>
                    <Route path={process.env.REACT_APP_ALL} element={<Online/>}/>
                    <Route path={process.env.REACT_APP_ADM_BASE} element={<AdmHomepage/>}/>
                    <Route path='/basket' element={<BasketPage/>}/>
                    <Route path={process.env.REACT_APP_IMG_MODIFICATION} element={<Single/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default Roads;