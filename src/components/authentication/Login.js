   
import React, {useState, useContext} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {UserContext} from '../../context/UserContext';
import {useAuth} from '../../context/AuthContext';
import Register from './Register';


const Login = (props) => {
   
   
    const [loginMessage, setLoginMessage]= useState();

    const { setUser} = useContext(UserContext);
    const {setAuthUser,isLoggedIn, setIsLoggedIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath= location.state?.path || '/';



const handleSignIn = async (e) =>{
    e.preventDefault();
  
   try {
        let res = await fetch("https://dummyjson.com/auth/login", {
          method: "POST", 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: e.target.emailx.value,
            password: e.target.passwordx.value,
            expiresInMins: 1
          }),
        });

        if(res.status === 200) {
            let resJson = await res.json();
            setIsLoggedIn(true); setAuthUser(resJson);
            sessionStorage.setItem("authUser",JSON.stringify(resJson));
            setLoginMessage('You have logged in successfully.');
            navigate(redirectPath, {replace: true});
         
        } else {
            setLoginMessage('Invalid credentials... Please try again using correct credentials')
          
        }
        
        
   
       
    } catch(err){
        console.log(err);
    }
    
}
         

  return (
    <>


    <nav className="breadcrumb container">
		  <a className="breadcrumb-item" href="/">Home</a>
		  <span className="breadcrumb-item active">{!isLoggedIn ? 'Login':'Logout'}</span>
		</nav>

		<div className="container">
		
		
			<div className="row">
					<div className="col-5">
              <h3>{!isLoggedIn ? 'Login':'Logout'}</h3>
              <div className="thickline mb-3"></div>
                <p className='well'>{!isLoggedIn ? 'If you are already a member, then login here': 
                            `<Link href=/logout>here</Link>`
                }</p>
                        <div className="text-danger text-center mb-3">{loginMessage}</div>
      
                            {!isLoggedIn && (
                                  <form onSubmit={handleSignIn}>
                                      
                                      <div className="form-group row">
                                      <label htmlFor="inputEmail1" className="col-sm-2 col-form-label">Email</label>
                                      <div className="col-sm-10">
                                          <input type="text" name="emailx" id="emailx" className="form-control" placeholder="Email" defaultValue='kminchelle' />
                                      </div>
                                      </div>
                                      <div className="form-group row">
                                      <label htmlFor="inputPassword1" className="col-sm-2 col-form-label">Password</label>
                                      <div className="col-sm-10">
                                          <input type="test" name="passwordx" id="passwordx" className="form-control" placeholder="Password" defaultValue={'0lelplR'} />
                                      </div>
                                      </div>
                                      
                                      <div className="form-group row">
                                      <div className="offset-sm-2 col-sm-10">
                                          <button type="submit" className="btn btn-primary">Sign in</button>
                                      </div>
                                      </div>						
                                  </form>
                              )}
                </div>
					
            <div className="col-7">
            <Register />
            </div>
        </div>
        </div>          
    </>
  )
}

export default Login
