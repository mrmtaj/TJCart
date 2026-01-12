
import React, { useCallback, useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {  EmbeddedCheckoutProvider,  EmbeddedCheckout} from '@stripe/react-stripe-js';

import { formatAmount } from '../../utilities/Helper';

const stripePromise = loadStripe("pk_test_FAVst8k3BLQkwcgem0PIGHR60018xgW33V");

const StripePayment = ({data, total, shipping}) => {
    console.log(total);
    console.log(total+shipping);
    console.log(formatAmount(total+ shipping));
  
  const fetchClientSecret = useCallback(() => {
   
    return fetch("https://localhost:7173/api/Payments/stripe-embeded", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        name : data.firstName + " " + data.lastName,
        amount : formatAmount(total+ shipping),
      }),
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

export default StripePayment

