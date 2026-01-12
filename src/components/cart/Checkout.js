import React, { useEffect, useState } from 'react';
import { Link} from "react-router-dom";
import {useAuth} from '../../context/AuthContext';
import { useSelector } from 'react-redux';
import { formatAmount } from '../../utilities/Helper';

import { useDispatch } from 'react-redux';
import { setCustomerInfo, setShippingInfo, setBillingInfo, setOrderInfo} from '../../redux/orderSlice';


import StripePayment from '../payments/StripePayment';
import PayPalPayment from '../payments/PayPalPayment';
import CashOnDelivery from '../payments/CashOnDelivery';
import ShippingInfo from './ShippingInfo';
import ShippingCart from './ShippingCart';



const Checkout = () => {

         const { authUser } = useAuth();
         const { cart } = useSelector(state => state.cart);
         const dispatch = useDispatch();
         const [user, setUser] = useState();
         const [total, setTotal] = useState(0);

         const [ishide, setIshide] = useState(0);
        
         const [formValues, setFormValues] = useState();
     
         const [payment_method, setPayment_method] = useState('cod');
         const [shipping, setShipping] = useState(5);
      

       
         console.log("Checkout");
                
         useEffect(()=>{
            console.log("i am called in checkout useffect");
             setTotal(cart.reduce((acc,curr) => acc + curr.price * curr.qty, 0));
             getData(); 
            },[cart])

         async function getData() {
            const response = await fetch(`https://dummyjson.com/users/${authUser.id}`)
            let xData = await response.json();
          
                      
            const {email, firstName, lastName, phone, address: { address: address1, address2, city, state , postalCode, country}} = xData;

            const userInfo  = { email, firstName, lastName, phone,  address1, address2, city, state, postalCode, country };
            setFormValues(userInfo);
            console.log(userInfo);

          //  dispatch(setCustomerInfo({email, phone}));
          //  dispatch(setShippingInfo({ address1, address2, city, state, postalCode, country } ));
         //   dispatch(setOrderInfo({shippingAmount: shipping}));
           }

        
            const handleInputChange = (e)=>{
               const target= e.target;
               const value = target.type ==='checkbox'? target.checked : target.value;
               const name = target.name;
             //  console.log(formValues);
               setFormValues({
                   ...formValues, [name]: value
               });
           
            
            }

           

         const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(formValues);

           const {email, phone}=formValues;
           dispatch(setCustomerInfo({email, phone}));

            const {address1, address2, city, state, postalCode, country}=formValues;
            dispatch(setShippingInfo( {address1, address2, city, state, postalCode, country}));
            dispatch(setBillingInfo( {address1, address2, city, state, postalCode, country}));

            dispatch(setOrderInfo({items: cart, shippingAmount: shipping, totalAmount : formatAmount(total), netAmount: formatAmount(total + shipping), paymentMethod :payment_method}));
      
         if (payment_method === 'stripe'){
            setIshide(1);
            //handleStripePayment();

         }
         else if (payment_method === 'paypal') {
            setIshide(1);

         }
         else { setIshide(1);}
         }


         const handleStripePayment = async () => {
          
            // const response = await fetch('https://localhost:7173/api/Payments/stripe-hosted', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({
            //     email : formValues.email,
            //     name:  formValues.name,
            //     amount : 10
            //   }),
            // });
            // const session = await response.json();
            //  window.location.href = session.url;
        
          };

  return (
    <>
     
 <nav className="breadcrumb container">
   <Link className="breadcrumb-item" to="/">Home</Link>
   <Link className="breadcrumb-item" to="/cart">Shopping Cart</Link>
    <span className="breadcrumb-item active">Checkout</span>
</nav>

<form id="frm_payment" onSubmit={handleSubmit}>
<div className="container">
   <div className="row">
      <div className="col-12">
         <div className="container nicocheckout">
            <div>
               <div>
                  <div className="error"></div>
                  <div className="row">
                     <div className="col-md-12">
                        <h3>Checkout</h3>
                     </div>
                  </div>

                  <div className="row box checkout_form">
                     {ishide == 0 && (
                        <div className="col-md-6 register_block">
                           <ShippingInfo formValues={formValues} handleInputChange={handleInputChange} />
                        </div>
                     )}              
                        <div className="col-md-6">
                           <ShippingCart payment_method={payment_method} setPayment_method={setPayment_method} cart={cart} total={total} ishide={ishide} setIshide={setIshide} 
                           shipping={shipping} setShipping={setShipping} />
                        </div>
                  { payment_method == "stripe" && ishide > 0  && (
                        <div className="col-md-6">
                            <StripePayment data={formValues} total={total} shipping={shipping} setShipping={setShipping}/>
                        </div>
                  )}

                  { payment_method == "paypal" && ishide > 0  && (
                        <div className="col-md-6">
                            <PayPalPayment data={formValues} total={total} shipping={shipping} setShipping={setShipping}/>
                        </div>
                  )}

               { payment_method == "cod" && ishide > 0  && (
                        <div className="col-md-6">
                            <CashOnDelivery data={formValues} total={total} shipping={shipping} cart={cart}/>
                        </div>
                  )}

               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
</form>
    </>
  )
}

export default Checkout
