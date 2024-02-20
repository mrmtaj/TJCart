import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import TopNav from './TopNav';

import Parallax from './products/Parallax';

import Footer from './Footer';
import Slider from './Slider';

import { UserContext } from '../context/UserContext';

import {AuthProvider} from '../context/AuthContext';
import {CartProvider} from '../context/CartContext';
import {ProductProvider} from '../context/ProductContext';

import Alert from './commons/Alert';

import { useMemo, useReducer, useState } from 'react';
// //import { createStore } from 'redux';
// import {legacy_createStore as createStore} from 'redux'
// import { Provider } from 'react-redux';
// import counterReducer from '../redux/reducer';

import counterReducer from '../redux/reducer';


const Layout = () => {


 const xpath = useLocation();
 const [user, setUser] = useState();
 const xUser= useMemo( ()=> ({user, setUser}),[user, setUser]);
 const [count, setCount] = useState(3);

 const [counter, counterDispatch] = useReducer(counterReducer, 8)

 const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({ msg: message,type: type })
      setTimeout(() => { setAlert(null);  }, 2500);
  }

useEffect (()=>{
},[count]);

 const CountClicked = () =>{
  setCount(count+1);
 }

  return (
        <>
     
        <UserContext.Provider value={{xUser, counter, counterDispatch}}>
         <AuthProvider>
            <CartProvider>
                <ProductProvider>
                      <TopNav  showAlert={showAlert}/>
                      <Alert alert={alert}/>
                      <Header count={count} CountClicked={CountClicked} showAlert={showAlert} />
                      {xpath.pathname === "/" && <Slider/>} 
                            <Outlet />
                      {xpath.pathname === "/" && <Parallax/>} 
                      <Footer/>
                  </ProductProvider>
            </CartProvider>
          </AuthProvider>

          </UserContext.Provider>
        </>
  )
}

export default Layout
