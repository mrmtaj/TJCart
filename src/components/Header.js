import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import {UserContext} from '../context/UserContext';
import {useAuth} from '../context/AuthContext';


import {useCart} from '../context/CartContext';
import {useProductFilter} from '../context/ProductContext';

import { useSelector } from 'react-redux';


const Header = ({count, CountClicked, showAlert}) => {

  const navigate = useNavigate();

  const {user, setUser, counter, counterDispatch} = useContext(UserContext);


  const {authUser, setAuthUser, setIsLoggedIn} = useAuth();

  const {cart} = useCart();

  const [srchterm, setSrchterm] = useState('');
  const {productFilter : {sort, searchQry}, productFilterDispatch } = useProductFilter();
 

  const [categories, setCategories]= useState([]);
 
 const [total, setTotal] = useState();


 
 //console.log(counter); 

useEffect(()=>{
      setTotal(cart.reduce((acc,curr) => acc + curr.price * curr.qty, 0))
    },[cart])

  useEffect(() => {
    getData(); 
  }, []);

  async function getData() {
    const response = await fetch(`https://dummyjson.com/products/categories`)
    let actualData = await response.json();
    setCategories(actualData)
  }

const handleLogout = () => {
  setAuthUser(null); setIsLoggedIn(false);//setUser(null);
  sessionStorage.removeItem("authUser");

}

function clickme(){
  showAlert("he am gere for you", 'success');
  CountClicked();
  counterDispatch({type: 'increment'})
}


function handleSearch(){
	productFilterDispatch({
		type: "SEARCH_BY_QRY",
		payload: srchterm
	  });

    navigate('/products');
			
}

  return (
   
      	

	<header className="container mt-5">
		
  <div className="row">
    
  <div className="col-md-3">
    <a href="/" className="logo">
      
      <h1 className="text-dark"><i className="text-secondary la la-plug"></i><span>electr<span className="text-secondary">o.</span></span></h1>
      <small className="text-dark">electronics shopping mall = {count}</small>
      
    </a>
  </div>

  <div className="col-md-5">
    
     <form className="">
xxxxxxxxxxxxxxx  
{counter !== null && counter}
 
      <div className="input-group input-group-lg mb-3" id="search-box" data-component-category>
        <input type="text" value={srchterm} onChange={(e)=> setSrchterm(e.target.value)}  className="form-control default-font-size" placeholder="Search product" aria-label="Search product" />

        {/* <select className="custom-select input-group-append form-control-lg no-border-x default-font-size">
              <option value="">All categories</option>
              {categories != null && categories.map((x,index) => 
              <option value={x} key={index}>{x}</option>
              )}
           </select> */}
        
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={clickme}><i className="la la-search"></i></button>
          <button className="btn btn-primary" type="button" onClick={handleSearch}><i className="la la-search"></i></button>
        </div>
      </div>
    </form>
    
  </div>

  <div className="col-md-4">
    
    <div className="dropdown float-right" id="mini-cart">
      <Link className="btn btn-link dropdown-toggle bg-faded p-0 chevron-big" to="/cart" id="dropdownMenuLink"  aria-haspopup="true" aria-expanded="false">
      <i className="la la-shopping-cart d-inline-block" style={{'fontSize': '42px' }}><span className="cart-items" data-total_items>{cart.length}</span></i>&ensp; <div className="d-inline-block text-dark"><span className="small d-block text-left">Your cart</span><span className="font-weight-bold" data-total>${total}</span></div>
      </Link>

    </div>
    
    <div className="dropdown float-right" id="mini-user" data-component-user>
      <a className="btn btn-link dropdown-toggle bg-faded p-0 chevron-big" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="la la-user d-inline-block" style={{'fontSize': '42px' }}></i>&ensp; 
      
      <div className="d-inline-block text-dark" data-if="login">
        <span className="small d-block text-left">My account</span>
        <span className="font-weight-bold">My Profile</span>
      </div>
      
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <Link className="dropdown-item" to="/profile">My Profile</Link>
      { authUser !== null ? (<Link className="dropdown-item" to="/" onClick={handleLogout}>Logout</Link>): (<Link className="dropdown-item" to="/login">Login</Link>)}
      
      </div>
    </div>
    
  </div>
  
  </div>


    <nav className="navbar navbar-light bg-white  rounded navbar-expand-md mt-4">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     

      <div className="collapse navbar-collapse" id="containerNavbar">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item dropdown categories-dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="la la-bars"></i>&ensp;Categories <i className="la la-angle-down float-right"></i></a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              {categories != null && categories.map((x,index) => 
                 <Link className="dropdown-item" to={`products/${x}`} key={index}>{x}</Link>
              )}
            </div>
          </li>



          <li className="nav-item active">
            <a className="nav-link" href="/featured">Home <span className="sr-only">(current)</span></a>
          </li>


          <li className="nav-item">
            <a className="nav-link" href="/products">Delivery Services</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/categories">Blog</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">Support</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="/">FAQ</a>
              <a className="dropdown-item" href="/">Our Story</a>
              <a className="dropdown-item" href="/">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="thickline"></div>
  </header>
  
  
  )
}

export default Header
