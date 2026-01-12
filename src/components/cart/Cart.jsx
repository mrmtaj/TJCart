import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux';
import {  clearCart } from '../../redux/cartSlice';

import CartItem from './CartItem';

import { formatAmount } from '../../utilities/Helper';





const Cart = () => {

   
      const { cart } = useSelector(state => state.cart);
      const dispatch= useDispatch();

      const [total, setTotal] = useState(0);
    

     useEffect(()=>{
         var xTotal= cart.reduce((acc,curr) => acc + curr.price * curr.qty, 0);
        setTotal(xTotal);

      },[cart])

     
        return (
            <>
              <nav className="breadcrumb container">
                <a className="breadcrumb-item" href="/">Home</a>
                <span className="breadcrumb-item active">Shopping Cart</span>
              </nav>

              <div className="container">
              
              
                <div className="row">
                    <div className="col-12">

                
                    <div className="table-responsive">
                      <table className="table table-bordered" data-cart>
                        <thead>
                          <tr>
                            <td className="text-center">Image</td>
                            <td className="text-left">Product Name</td>
                            <td className="text-left">Brand</td>
                            <td className="text-left">Quantity</td>
                            <td className="text-right">Unit Price</td>
                            <td className="text-right">Total</td>
                          </tr>
                        </thead>
                        <tbody>
                        {cart.map ((item)=> 
                          // <CartItem item={item} key={item.id} removeFromCart={removeFromCart} updateCartItem={UpdateCartItemQty}></CartItem>
                          <CartItem item={item} key={item.id}></CartItem>
                        )}

                          <tr>
                          <td colSpan={3}></td>
                          
                          <td className="text-left"> 
                          {cart.length > 0  && 
                            (
                            <div className="input-group btn-block">
                              <button type="button" className="btn btn-danger mr-2" onClick={() => dispatch(clearCart())}><i className="la la-trash"></i>Clear Cart</button>
                              <Link to="/checkout" className="btn btn-primary"><i className="la la-arrow-circle-right"></i>Check Out</Link>
                            </div>
                            )}
                          </td>
                          <td className="text-right"><strong>Cart Total:</strong></td>
                          <td className="text-right"><strong>${formatAmount(total)}</strong></td>
                            </tr>		
                        </tbody>
                      </table>
                    </div>
                
                    </div>
                </div>


              </div>
              </>
        )
}

export default Cart
