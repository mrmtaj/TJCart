import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_FAVst8k3BLQkwcgem0PIGHR60018xgW33V');

const Payment1 = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = async () => {
    const response = await fetch('https://localhost:7173/api/Payment/stripe-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        address,
      }),
    });
    const session = await response.json();
    window.location.href = session.url;

    // const { error } = await stripePromise.redirectToCheckout({
    //   sessionId: session.id,
    // });

    // if (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <Elements stripe={stripePromise}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleClick}>Checkout</button>
    </Elements>
  );
};

export default Payment1;