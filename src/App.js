import './App.css';
import Layout from './components/Layout';

import Featured from './components/products/Featured';
import Products from './components/products/Products';
import ProductDetails from './components/products/ProductDetails';

import Categories from './components/products/Categories';
import Cart     from './components/cart/Cart';
import Checkout     from './components/cart/Checkout';
import Login     from './components/authentication/Login';
import RequireAuth     from './components/authentication/RequireAuth';
import Profile     from './components/authentication/Profile';
import ErrorBoundary from './components/commons/ErrorBoundary';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

 
  return (
    
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout /> } errorElement={<ErrorBoundary />}>
                <Route index element={<Featured />}></Route>
                <Route path="featured" element={<Featured />}></Route>

                <Route path="products">
                     <Route index element={<Products />} />
                     <Route path=':cat' element={<Products />} />
                </Route>
                <Route path='productdetails/:id' element={<ProductDetails />} />

                <Route path="categories" element={<Categories />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="login" element={<Login />}></Route>
                
                <Route element={<RequireAuth /> } >
                   <Route path="checkout" element={<Checkout />}></Route>
                   <Route path="profile" element={<Profile />}></Route>
                </Route>

                <Route path="*" element={''}> </Route>
            </Route>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
