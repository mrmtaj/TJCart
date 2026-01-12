import React from 'react';
import { formatAmount } from '../../utilities/Helper';


const PayPalPayment = ({data, total, shipping, cart}) => {
  return (
    <>
   <div className="your_order">
            <strong>Your Order Summary : PayPal Express Checkout</strong>

            <table id="cart_table" className="table table-hover table-bordered mt-3">
           
            <tbody>

                <tr>
                    <td  className="text-xs-right"><strong>Email:</strong></td>
                    <td  className="text-xs-right">{data.email}</td>
                </tr>
                <tr>
                    <td  className="text-xs-right"><strong>Shipping Address:</strong></td>
                    <td  className="text-xs-right">{data.address1}, {data.address2}, <br/>
                        {data.city}, {data.state}, {data.postalCode} <br/>
                        {data.country}
                    </td>
                </tr>
                <tr>
                    <td  className="text-xs-right"><strong>Order Total:</strong></td>
                    <td className="text-right">${formatAmount(total + shipping)}</td>
                </tr>

               </tbody>
            </table>
          
            
         
            <div className="float-sm-right clearfix">
                <input className="btn btn-primary" id="btn-confirm" value="Confirm Order" type="button" />
            </div>
        </div>
    
    </>
  )
}

export default PayPalPayment