import React, { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading) {
        return <div>spinner</div>
    }
    if(user && user?.uid){
        return children
    }
    <Navigate to='/login'></Navigate>
  
};

export default PrivateRoute;