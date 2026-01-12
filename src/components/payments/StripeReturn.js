
import React, {useState, useEffect} from 'react'
import {Navigate} from 'react-router-dom';

function StripeReturn() {
    
const [status, setStatus] = useState(null);
const [customerEmail, setCustomerEmail] = useState('');

useEffect(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sessionId = urlParams.get('session_id');

  fetch(`/session-status?session_id=${sessionId}`)
    .then((res) => res.json())
    .then((data) => {
      setStatus(data.status);
      setCustomerEmail(data.customer_email);
    });
}, []);

if (status === 'open') {
  return (
    <Navigate to="/checkout" />
  )
}

if (status === 'complete') {
  return (
    <section id="success">
      <p>
        We appreciate your business! A confirmation email will be sent to {customerEmail}.

        If you have any questions, please email <a href="mailto:orders@tjcart.com">orders@tjcart.com</a>.
      </p>
    </section>
  )
}

return null;
}

export default StripeReturn