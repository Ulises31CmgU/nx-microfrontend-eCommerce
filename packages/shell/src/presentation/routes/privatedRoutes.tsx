import React from 'react'
import { urlRoutes } from './config/urlRoutes/urlRoutes';
import { Outlet, Navigate } from 'react-router-dom'

interface IProps {
    isLoggedIn: boolean;
}

const PrivatedRoutes = ({isLoggedIn}: IProps) => {
    return isLoggedIn ? <Outlet /> : <Navigate to={urlRoutes.auth.login.urlTo} />
}

export default PrivatedRoutes