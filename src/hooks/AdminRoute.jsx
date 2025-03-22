import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from './useAdmin';
import useAuth from './useAuth';

const AdminRoute = ({ children }) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <progress className='progress w-56'></progress>;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;