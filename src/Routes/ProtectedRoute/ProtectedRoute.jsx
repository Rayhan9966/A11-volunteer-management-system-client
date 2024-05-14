import React, { useContext } from 'react';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
import {Navigate,useLocation} from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const ProtectedRoute = ({children}) => {
    console.log(children);
    
    const location= useLocation()
    console.log(location);
    
    const{user,loading}=useContext(AuthContext);
    if(loading){
        return <span className='loading loading-spinner loading-lg'></span>
    }

    if(user){
return children

    }

    return <Navigate to="/login" state={location.pathname}> </Navigate>
    // <Navigate to="/login"></Navigate>
};

export default ProtectedRoute;