import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import TopNav from './TopNav';

import Parallax from './products/Parallax';

import Footer from './Footer';
import Slider from './Slider';

import { UserContext } from '../context/UserContext';

import { AuthProvider } from '../context/AuthContext';


import Alert from './commons/Alert';

import { useMemo, useState } from 'react';



import { Provider } from 'react-redux';
import store from '../store';



const Layout = () => {


  const xpath = useLocation();
  const [user, setUser] = useState();
  const xUser = useMemo(() => ({ user, setUser }), [user, setUser]);



  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type })
    setTimeout(() => { setAlert(null); }, 2500);
  }



  // console.log('Initial State ', store.getState())
  // const unsubscribe = store.subscribe(() => {
  //   console.log('Updated State ', store.getState())
  // })


  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ xUser }}>
          <AuthProvider>


            <TopNav showAlert={showAlert} />
            <Alert alert={alert} />
            <Header showAlert={showAlert} />
            {xpath.pathname === "/" && <Slider />}
            <Outlet />
            {xpath.pathname === "/" && <Parallax />}
            <Footer />



          </AuthProvider>

        </UserContext.Provider>
      </Provider>
    </>
  )
}

export default Layout
