import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const CartItem = ({item, removeFromCart, updateCartItem}) => {

  
  const qtyRef = useRef(null);
  const [qty, setQty] = useState(item.qty);


   
const IncreaseQty = (item) =>{
    let xQty=Number(qtyRef.current.value)+1;
     setQty(xQty) 
     updateCartItem(item, xQty);
   
}
const DecreaseQty = (item) =>{
    let xQty=Number(qtyRef.current.value);
    if ( xQty > 1)  {
        xQty -=1; setQty(xQty);
    }
  
      updateCartItem(item, xQty);
    
 }

  function HandleQtyChange(e){
    let xQty=Number(e.target.value);
   if (xQty >= 1) {
         setQty(xQty);
        updateCartItem(item, xQty);

    } else setQty(1);
   
  }

  return (
    
      <tr>
            <td className="text-center">
                <a href="/product/{item.id}">
                    <img src={item.thumbnail} width={50} height={50} alt="iPhone" title="iPhone"/>
                </a>
            </td>
            <td className="text-left"><a href={`/product/${item.id}`}>{item.title}</a>
                <span className="text-danger"></span>
            </td>
            <td className="text-left">{item.brand}</td>
            <td className="text-left">
                <div className="input-group btn-block" style={{maxWidth: '200px'}}>
                <button type="submit" data-toggle="tooltip" title="Update" className="btn btn-primary"  onClick={()=>DecreaseQty(item)}><i className="la la-minus-circle"></i></button>
                    <input type="number" ref={qtyRef} name="qty"  value={qty} min="1" size="1" onChange={(e) => {HandleQtyChange(e)}} className="form-control text-center" />
                    <span className="input-group-btn">
                    <button type="submit" data-toggle="tooltip" title="Update" className="btn btn-primary" onClick={()=>IncreaseQty(item)}><i class="la la-plus-circle"></i></button>
                    
                    <button type="button" data-toggle="tooltip" title="Remove" className="btn btn-danger ml-1"  onClick={()=>removeFromCart(item.id)}><i className="la la-trash"></i></button></span>
                </div>
            </td>
            <td className="text-right">${item.price}</td>
            <td className="text-right">${item.price * item.qty}</td>
        </tr>
                            
      )
}

export default CartItem
