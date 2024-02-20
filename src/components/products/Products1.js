import React, { useState, useEffect } from "react";



const Products1 = () => {
 
  const [products, setProducts] = useState([]);
        
      useEffect(() => {
        console.log("chook called");
        fetch(`https://dummyjson.com/products`)
        .then((response) => response.json())
        .then((x) => { setProducts(x); console.log(x)})
        .catch((err) => { console.log(err.message);});
      },[]);

    return (
      <>
      {/* <div className="container border"> */}
      <div className="row gy-3 my-3 mx-3">
         <h1>Featured Products</h1>
          
            { products.products !=null && products.products.map ((x,index) =>    
                (
                 <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card h-100" key={index}   >
                      <div className="card-body">
                        <h5 className="card-title">{x.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  
                )
              )} 
        </div>
  
    </>
    
  );
}

export default Products1
