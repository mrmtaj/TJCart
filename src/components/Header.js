import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useSearchParams  } from "react-router-dom";

import {UserContext} from '../context/UserContext';
import {useAuth} from '../context/AuthContext';


import { useSelector, useDispatch } from "react-redux";

import { formatAmount } from "../utilities/Helper";


const Header = () => {

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  /////////////////////////////////////////
 // const mycount= useSelector(state => state.todo.value);
  //const dispatch = useDispatch();

  const {user, setUser} = useContext(UserContext);


  const {authUser, setAuthUser, setIsLoggedIn} = useAuth();

 // const {cart} = useCart();
 const { cart } = useSelector(state => state.cart)

  const [srchterm, setSrchterm] = useState('');
  //const {productFilter : {sort, searchQry}, productFilterDispatch } = useProductFilter();
 

  const [categories, setCategories]= useState([]);
 
 const [total, setTotal] = useState(0);
 const [totalquantity, setTotalquantity] = useState(0);


useEffect(()=>{
      setTotalquantity(cart.reduce((acc,curr) => acc + curr.qty, 0));
      setTotal(cart.reduce((acc,curr) => acc + curr.price * curr.qty, 0));
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


function handleSearch(){
	
 
  if (srchterm != '') {
    navigate(`/products?q=${encodeURIComponent(srchterm)}`);
  } else  navigate(`/products`);
    
			
}

  return (
   
      	

	<header className="container mt-5">
		
  <div className="row">
    
  <div className="col-md-3">
    <a href="/" className="logo">
      
      <h1 className="text-dark"><i className="text-secondary la la-shopping-cart"></i><span>Shop<span className="text-secondary">Guru</span></span></h1>
      <small className="text-dark">Your online shopping stop</small>
      
    </a>
  </div>

  <div className="col-md-5">
    
     <form className="">

 
      <div className="input-group input-group-lg mb-3" id="search-box" data-component-category>
        <input type="text" value={srchterm} onChange={(e)=> setSrchterm(e.target.value)}  className="form-control default-font-size" placeholder="Search product" aria-label="Search product" />

       
        
        <div className="input-group-append">
                   <button className="btn btn-primary" type="button" onClick={handleSearch}><i className="la la-search"></i></button>
        </div>
      </div>
    </form>
    
  </div>

  <div className="col-md-4">
    
    <div className="dropdown float-right" id="mini-cart">
      <Link className="btn btn-link dropdown-toggle bg-faded p-0 chevron-big" to="/cart" id="dropdownMenuLink"  aria-haspopup="true" aria-expanded="false">
      <i className="la la-cart-plus d-inline-block" style={{'fontSize': '42px' }}><span className="cart-items" data-total_items>{totalquantity}</span></i>&ensp; <div className="d-inline-block text-dark"><span className="small d-block text-left">Your cart</span><span className="font-weight-bold" data-total>${formatAmount(total)}</span></div>
      </Link>

    </div>
    
    <div className="dropdown float-right" id="mini-user" data-component-user>
      <a className="btn btn-link dropdown-toggle bg-faded p-0 chevron-big"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
            <a className="nav-link dropdown-toggle" href="/" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="la la-bars"></i>&ensp;Categories <i className="la la-angle-down float-right"></i></a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              {categories !== null && categories.map((x,index) => 
                 <Link className="dropdown-item" to={`products/${x.slug}`} key={index}>{x.slug}</Link>
              )}
            </div>
          </li>



          <li className="nav-item active">
            <Link className="nav-link" to="/featured">Featured <span className="sr-only">(current)</span></Link>
          </li>

{/* 
          <li className="nav-item">
            <Link className="nav-link" href="/products">Delivery Services</Link>
          </li> */}

          <li className="nav-item">
            <Link className="nav-link" to="/categories">Categories</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">Support</Link>
          </li>

         
          <li className="nav-item">
            <Link className="nav-link" to="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>

    <div className="thickline"></div>
  </header>
  
  
  )
}

export default Header
