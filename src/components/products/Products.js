import React, { useState, useEffect } from "react";
import { useParams, useSearchParams  } from 'react-router-dom';
import Pagination from "../commons/Pagination";

import { Capitalize } from "../commons/Utilities";

import Product from "./Product";



//import { useSelector, useDispatch } from "react-redux";
//import {setSort } from "../../redux/productSlice";


const Products = () => {
const {cat} = useParams();
const [searchParams, setSearchParams] = useSearchParams();

//const location = useLocation();

const [currentPage, setCurrentPage] = useState(1);
const [recordsPerPage] = useState(4);

const [pageLink, setPageLink] = useState('/products');


const [products, setProducts] = useState([]);
const [sort, setSort] = useState('asc');

//const dispatch = useDispatch();

//const {productFilter : {sort, searchQry}, productFilterDispatch } = useProductFilter();

//const sort = useSelector(state =>  state.products.sort);
//const searchQry = useSelector(state =>  state.products.searchQry);

//const [searchQry, setSearchQry] = useState();
const qParam = searchParams.get('q');

// console.log("cat", cat);
// console.log("cat null", cat==null);
// console.log("cat empty", cat=='');
// console.log("cat undefined", cat==undefined);


//  console.log("Param1", qParam == null)
//  console.log("Param2", qParam == '')
        
useEffect(() => {
 
	console.log("useffect1", cat == null);
	let xURL = `https://dummyjson.com/products?limit=300`;
   
    if (cat != null ) {
		xURL = `https://dummyjson.com/products/category/${cat}`;
		setPageLink(`/products/${cat}`);
  	} else setPageLink(`/products`); 
  
	
	fetch(xURL)
	.then((response) => response.json())
	.then((x) => { setProducts(x);setCurrentPage(1)})
	.catch((err) => { console.log(err.message);});
	},[cat]);




useEffect(() => {
	console.log("useffect2", qParam == null);
	
 if (qParam != null && cat == null)  { 
	setPageLink(`/products?q=${encodeURIComponent(qParam)}`); 
	}
	else setPageLink(`/products`); 
  }, [qParam]);


function handleOnChange(e){
		  //dispatch(setSort(e.target.value));
		  setSort(e.target.value);
			
}


const transformProducts = () =>{

 let sortedProducts =  products.products;
 
	if (sort) {
		sortedProducts = sortedProducts.sort((a, b) =>
		sort === "asc" ? a.price - b.price : b.price - a.price  
		);
	}

	if (qParam) {
			
		sortedProducts = sortedProducts.filter((prod) =>
		prod.title.toLowerCase().includes(qParam)
		);
	}

 	return sortedProducts;
}


	const lastRecordIndex = currentPage * recordsPerPage;
    const firstRecordIndex = lastRecordIndex - recordsPerPage;
	const currentProducts = products.products && transformProducts().slice(firstRecordIndex, lastRecordIndex);


	return (
    
	<>
	
	
	<nav className="breadcrumb container">
		  <a className="breadcrumb-item" href="/">Home</a>
		  <a className="breadcrumb-item" href="/products">Products</a>
		  <span className="breadcrumb-item active">{cat && Capitalize(cat)}</span>
		</nav>

	<div className="container">

		<div className="row">
		
			<aside className="col-3">
			
			<h4>Filter by price</h4>
			
			</aside>
			
			<section className="col-9 products">
				<h2>{cat && Capitalize(cat)}</h2>
				
				<div className="row"> 
					<div className="col-9"></div>
					<div className="col ml-auto mb-3">
						<select className="form-control" value={sort} onChange={handleOnChange}>
						<option value="asc">Price: Low to High</option>
						<option value="desc">Price: High to Low</option>
						</select>
					</div>
				</div>
				<div className="row">
					{ currentProducts !=null && currentProducts.map ((prod,index) =>    
						(
							<div className="col-md-3" key={index}>
								<Product prod={prod} />
							</div> 
						)
					)}
				</div>

				<Pagination
                totalRecords={products.products && transformProducts().length}
                recordsPerPage={recordsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
				pageLink = {pageLink}
				/>
		
		
			</section> 
			
			
		
		</div>
    </div>

	</>
    



  )
}

export default Products
