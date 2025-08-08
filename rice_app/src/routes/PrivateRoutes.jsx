import React from 'react'
import { useNavigate,useLocation,Outlet,Navigate } from 'react-router-dom'
import { useAuth } from '../store/context/AuthContext'

const PrivateRoutes = ({allowedUser}) => {
  console.log("allowedUser",allowedUser)

  let {isAunthenticated,role,loading}=useAuth()//accessing the data of user from centalized st

  //accesing current url to direct the user to different page
  let location=useLocation()
  
  //making app wait until auth ckeck are done
  if(loading) return null

  //if not loggedin redirect
  if(!isAunthenticated){
    return <Navigate to={'/auth'} state={{from:location}} replace/>
  }

  //role verification
  if (allowedUser&&!allowedUser.includes(role)){
    return<Navigate to='/unauthorized' replace/>
  }

  return <Outlet/>//renders/displays the children element based on auth 
    
}

export default PrivateRoutes
