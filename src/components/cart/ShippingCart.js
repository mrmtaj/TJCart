import React, { useState } from 'react';
import { Link} from "react-router-dom";

import { formatAmount } from '../../utilities/Helper';



function ShippingCart({payment_method, setPayment_method, cart, total, ishide, setIshide, shipping, setShipping}) {
   
      
    const shippingRates = [
        { name: 'Falt Shipping Rate', value: 5 },
        { name: 'Express Shipping Rate', value: 10 }
     ];

    const  handleShipping = (e) => {
            const target = e.target;
        if  (target.id  === 'shipping_rate1') {
            setShipping(shippingRates[0].value);
    
        }
        
        else {
            setShipping(shippingRates[1].value);
        
        }
     }

     const handlePaymentChange = (event) => {
        console.log(event.target.value);
        setPayment_method(event.target.value);
      
      };

  return (
    <>
    {ishide == 0 && (
        <div className="shipping-method">
            <p>Please select the preferred shipping method to use on this order.</p>
            <p><strong>Flat Rate</strong></p>
            <div className="radio">
            <label className="custom-control custom-radio">
            <input id="shipping_rate1"  className="custom-control-input" name="shipping_method" value="5" title="Flat Shipping Rate" type="radio" onChange={(e)=>handleShipping(e)}  checked={shipping === 5}  /><span className="custom-control-label"></span>
            <span className="custom-control-description">{shippingRates[0].name} - ${shippingRates[0].value}</span>
            </label>

            <label className="custom-control custom-radio">
            <input id="shipping_rate2" className="custom-control-input" name="shipping_method" value="10" title="Express Shipping Rate" type="radio" onChange={handleShipping} checked={shipping === 10}  /><span className="custom-control-label"></span>
            <span className="custom-control-description">{shippingRates[1].name}- ${shippingRates[1].value}</span>
            </label>
            </div>
        </div>
     )}
        <div className="your_order">
            <strong>Shopping Cart</strong>
            <table id="cart_table" className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th className="text-xs-left">Product Name</th>
                    <th className="text-xs-left hidden-xs">Model</th>
                    <th className="text-xs-right hidden-xs">Quantity</th>
                    <th className="text-xs-right hidden-xs">Unit Price</th>
                    <th className="text-xs-right">Total</th>
                </tr>
            </thead>
            <tbody>

            {cart?.map ((item)=> 
                <tr data-product>
                    <td className="text-xs-left"><Link to={`/productdetails/${item.id}`}><span data-name>{item.title}</span></Link>
                    </td>
                    <td className="text-xs-left hidden-xs">{item.brand}</td>
                    <td className="text-xs-right">{item.qty}</td>
                    <td className="text-xs-right text-right">${item.price}</td>
                    <td className="text-xs-right text-right">${formatAmount(item.price * item.qty)}</td>
                </tr>
                )}

            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3" className="text-xs-right hidden-xs-down"><strong>Sub-Total:</strong></td>
                    <td colSpan="1" className="text-xs-right hidden-sm-up"><strong>Sub-Total:</strong></td>
                    <td className="text-xs-right text-right">${formatAmount(total)}</td>
                </tr>
                <tr>
                    <td colSpan="3" className="text-xs-right hidden-xs-down"><strong>Shipping Rate:</strong></td>
                    <td colSpan="1" className="text-xs-right hidden-sm-up"><strong> Shipping Rate:</strong></td>
                    <td className="text-xs-right text-right">${formatAmount(shipping)}</td>
                </tr>

                <tr>
                    <td colSpan="3" className="text-xs-right hidden-xs-down"><strong>Total:</strong></td>
                    <td colSpan="1" className="text-xs-right hidden-sm-up"><strong>Total:</strong></td>
                    <td className="text-right">${formatAmount(total + shipping)}</td>
                </tr>
            </tfoot>
            </table>
            <br/>

             {ishide == 0 && ( 
            <>
            <div className="payment-method">
                <p>Please select the preferred payment method to use on this order.</p>
                <div className="radio">
                    <label className="custom-control custom-radio">
                    <input id="payment_stripe" className="custom-control-input" name="payment_method" value="stripe" title="Stripe Checkout" type="radio" onChange={handlePaymentChange} checked={payment_method === 'stripe'} /><span className="custom-control-label"></span>
                    <span className="custom-control-description">Stripe Checkout</span>
                    </label>
                </div>
                <div className="radio">
                    <label className="custom-control custom-radio">
                    <input id="payment_paypal" className="custom-control-input" name="payment_method" value="paypal" title="PayPal Express Checkout" type="radio" onChange={handlePaymentChange} checked={payment_method === 'paypal'} /><span className="custom-control-label"></span>
                    <span className="custom-control-description">PayPal Express Checkout</span>
                    </label>
                </div>
                <div className="radio">
                    <label className="custom-control custom-radio">
                    <input id="payment_cod" className="custom-control-input" name="payment_method"  value="cod" title="Cash On Delivery" type="radio" onChange={handlePaymentChange} checked={payment_method === 'cod'} /><span className="custom-control-label"></span>
                    <span className="custom-control-description">Cash On Delivery</span>
                    </label>
                </div>
            </div>
            <p><strong>Add Comments About Your Order</strong></p>
            <p>
            <textarea name="comment" rows="3" className="form-control"></textarea>
            </p>
          
                <input className="btn btn-primary" data-loading-text="Loading..." id="btn-checkout" value="Checkout" type="submit" />
            
            </>
             )}
            {ishide > 0 && (
            
                <input className="btn btn-secondary m-3" id="btn-checkout-cancel" value="Cancel" type="button" onClick={()=> setIshide(0)} />
           
             )}
        </div>
    </>
        

  )
}

export default ShippingCart