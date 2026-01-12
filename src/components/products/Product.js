import React from 'react';
import {Link} from 'react-router-dom';

//import {useCart} from '../../context/CartContext';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';



const Product = ({prod}) => {

//const {addToCart} = useCart();
const dispatch = useDispatch();



  return (
            // <article className="product h-100 border">
            //     <Link to={`/productdetails/${prod.id}`}><img src={prod.thumbnail} className="img-fluid" alt={prod.title}/></Link>
            //         <h3><a href="product.html">{prod.title}</a></h3>
            //         <span className="description">{prod.description}</span>
            //     <div className="prce">
            //         <span className="currency">$</span> <span>{prod.price}</span>
            //     </div>
            //     <div className="btn-group col-md-4 border">
            //       <button type="button" className="btn btn-sm btn-secondary bt-block mt-auto" title="Add to Cart" onClick={()=>addToCart(prod)}>
            //               <i className="fa fa-shopping-cart"></i> Add to Cart
            //       </button>
            //     </div>
            // </article>

        <div className="card product h-100">
             <Link to={`/productdetails/${prod.id}`}><img className="card-img-top img-fluid" src={prod.thumbnail}  alt={prod.title} /></Link>
            <div className="card-body">
            <h6 className="card-title">{prod.title}</h6>
            {/* {<p className="card-text">{prod.description}</p> } */}
            <span className="currency">$</span> <span>{prod.price}</span>
            </div>
            <div className="card-footer">
            <button type="button" className="btn btn-sm btn-secondary btn-block mt-auto" title="Add to Cart" onClick={()=>dispatch(addToCart(prod))}>
                          <i className="fa fa-shopping-cart"></i> Add to Cart
                  </button>
            </div>
        </div>
     )
}

export default Product
