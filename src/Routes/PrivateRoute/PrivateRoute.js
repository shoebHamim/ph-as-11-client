import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
  const {user,loading}=useContext(authContext)
  if (loading) {
    return <>
      <div className="flex justify-center">
        <div className="border-t-transparent text-ce border-solid animate-spin  rounded-full border-blue-400 border-4 h-12 w-12"></div>
      </div>
      </>
  }
  if(user?.uid){
    return children
  }
  else{
    return <Navigate to='/login'></Navigate>
  }
};

export default PrivateRoute;
