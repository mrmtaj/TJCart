
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';



const RequireAuth = ({children}) => {

    const location= useLocation();
    const {isLoggedIn}= useAuth();
  
    if (!isLoggedIn)
         return <Navigate to="/login"  state= {{path: location.pathname}}/>

     return <Outlet />
}

export default RequireAuth
