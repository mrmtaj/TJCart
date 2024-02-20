import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {useCart} from '../../context/CartContext';


const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const {addToCart} = useCart();
        
    useEffect(() => {
      
      let xURL = `https://dummyjson.com/products/${id}`;
      fetch(xURL)
      .then((response) => response.json())
      .then((x) =>  setProduct(x))
      .catch((err) => { console.log(err.message);});
    },[id]);


  return (
    <div>
    <nav className="breadcrumb container">
		  <a className="breadcrumb-item" href="/">Home</a>
		  <a className="breadcrumb-item" href="/products">Products</a>
		  <a className="breadcrumb-item" href={`/products/${product?.category}`}>{product?.category}</a>
		  <span className="breadcrumb-item active">{product?.title}</span>
		</nav>


   {product != null && 
	    <article className="product-details container" data-component-product>
			
			<div className="row">

				
				<div className="col-md-8">
					
					<div className="zoom-gallery row">

					<ul className="list-unstyled product-gallery col-md-2">

                    {product.images.map(img => {
                        return <li className="list-item" key={img}>
							<a href={img}><img src={img} className="img-fluid"  alt="" /></a>
						</li>
                     } 
                     )}
                       
						
					</ul>

					<div className="col-md-10">
						<a href="img/products/5.jpg"><img src={product?.images?.[0]} className="img-fluid" alt="" /></a>
					</div>
					
					</div>

	
				</div>

			
				
				<div className="col-md-4">
					<h1 className="product-heading" data-name>{product?.title}</h1>
					
					
					<ul className="list-unstyled text-muted">
					  <li>Brand: <span>{product.brand}</span></li>
					  <li>SKU: <span>{product.id}</span></li>
					  <li>Stock: <span>{product.stock}</span></li>
					</ul>
					
									
					<div className="price h3">
						<span className="currency" data-currency>$</span> <span data-price>{product.price}</span>
					</div>
					
					<hr/>
					
									
					<button type="button" className="btn btn-primary btn-block btn-icon"  onClick={()=>addToCart(product)}> 
						 <i className="la la-cart-plus"></i> Add to cart
					</button>

				
								
				</div>

			</div>	    
		

			<div className="product-tabs clearfix" role="tabpanel">
				  <ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
					  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-expanded="true">Description</a>
					</li>
					<li className="nav-item">
					  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-expanded="false">Specification</a>
					</li>
					
				  </ul>
				  <div className="tab-content" id="myTabContent">
					<div role="tabpanel" className="tab-pane fade active show" id="home" aria-labelledby="home-tab">
					  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
					</div>
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					  <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
					</div>
					
				  </div>
				</div>

		
	    </article>
}
    </div>
  )
}

export default ProductDetails
