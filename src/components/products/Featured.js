import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, xIncrement } from "../../redux/productSlice";
import ReactPaginate from 'react-paginate';

import Product from "./Product";

let items=[];

const Featured = () => {

const dispatch = useDispatch();
//const [products, setProducts] = useState([]);
//console.log("xincrement", xIncrement);

//const mcount =   useSelector(state =>  state.products.mcount);
const products = useSelector(state =>  state.products);


//console.log("porduct222",products);
        
// useEffect(() => {
//   fetch(`https://dummyjson.com/products`)
//   .then((response) => response.json())
//   .then((x) => { setProducts(x);  items=x.products})
//    .catch((err) => { console.log(err.message);});
// },[]);

//dispatch(fetchProducts());
       
useEffect(() => {
	//dispatch(fetchProducts());
	getdata();
	
	
  },[]);

 const getdata =  () => {
	dispatch(fetchProducts())
	.then ( response => { items = response.payload.products;} )
 }
  
 


if (products.loading) {
    return (<h1>Loading... </h1>);
  }

  return (
    <>
    
    
    <div className="container products-tab-carousel">

		<nav>
		  <div className="nav nav-tabs" id="nav-tab" role="tablist">
			<a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Featured products</a>
			<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Popular products</a>
			<a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Bestseller products</a>
		  </div>
		  
		</nav>
		<div className="tab-content" id="nav-tabContent">
		  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">


		<section className="container products clearfix" data-component-products="limit:4 page:0 id:1679,807,786,1597" data-products='{"1": "Mac pro", "2":"Ipod"}'>

			{/* <div className="owl-carousel owl-theme"> */}
			<div className="row my-3">
			
				{ <PaginatedItems itemsPerPage={4}/>}

			</div>
		</section>  

		  
		  </div>
		  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
		    tab 2 panel 
			xcount = { products.mcount ? products.mcount: 9}  
			<button className="btn btn-primary ml-4" type="button" onClick={()=> dispatch(xIncrement())}> Click To Increment</button>
		  </div>
		  
		  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
		  tab 3 panel
		  </div>
		</div>
    
    </div>	
    </>

   
  )
}

export default Featured


// *************************component to display current product items**********************************
function Items({ currentItems }) {
	return (
	  <>
		{ currentItems !=null && currentItems.map ((x,index) =>    
					(
						<div className="item col-sm-6 col-md-4 col-lg-3 my-3" key={index} >
							<Product prod={x} />
						</div> 
					)
				 )} 
	  </>
	);
  }

 // *********************************************

 
function PaginatedItems({ itemsPerPage }) {
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);
  	const endOffset = itemOffset + itemsPerPage;
//	console.log(`Loading items from ${itemOffset} to ${endOffset}`);

	const currentItems = ( items !== null )  && items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil( items != null && items.length / itemsPerPage);
  
	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
	  const newOffset = (event.selected * itemsPerPage) % items.length;
	//  console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
	  setItemOffset(newOffset);
	};
  
	return (
	  <>
		<Items currentItems={currentItems} />

		<ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
		/>
	  </>
	);
  }