import React, { useState } from 'react';

function ShippingRates() {
  const [selectedRate, setSelectedRate] = useState(null);
  const [totalCost, setTotalCost] = useState(0);

  const shippingRates = [
    { name: 'Flat shipping_rate1', value: 5 },
    { name: 'shipping_rate2', value: 10 },
  ];

  const handleRateChange = (event) => {
    setSelectedRate(event.target.value);
    setTotalCost(prevTotal => prevTotal + parseInt(event.target.value));
  };

  return (
    <div>
      <h2>Shipping Rates</h2>
      {shippingRates.map(rate => (
        <div key={rate.name}>
          <input
            type="radio"
            name="shipping_rate"
            value={rate.value}
            checked={selectedRate === rate.value}
            onChange={handleRateChange}
          />
          <label htmlFor={rate.name}>{rate.value}</label>
        </div>
      ))}
      <p>Total Cost: ${totalCost}</p>
    </div>
  )
}
  export default ShippingRates;