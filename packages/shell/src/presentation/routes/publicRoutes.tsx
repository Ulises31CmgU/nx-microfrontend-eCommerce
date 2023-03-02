import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface IProps {
    isLoggedIn: boolean;
}

const PublicRoutes = ({isLoggedIn}: IProps) => {
    return !isLoggedIn ? <Outlet /> : <Navigate to={"/"} />
}

export default PublicRoutes