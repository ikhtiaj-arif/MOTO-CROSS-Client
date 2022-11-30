import React, { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading) {
        return <div><Spinner/></div>
    }
    if(user && user?.uid){
        return children
    }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
  
};

export default PrivateRoute;