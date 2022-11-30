import React, { useContext, useState } from 'react';
import { getRole } from '../Api/User';
import { AuthContext } from '../Context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const AdminRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [roleLoading, setRooleLoading] = useState(true)
    const location = useLocation()


    getRole(user?.email)
    .then(data => {
       setRole(data);
       setRooleLoading(false)
    })
    console.log(role);
    if(loading || roleLoading) {
        return <><Spinner/></>
    }
    if(user && role === 'admin'){
        return children
    }

    return  <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;