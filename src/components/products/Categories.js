import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Categories = () => {
  const [categories, setCategories] = useState([]);

  // useEffect (() =>{
  //     console.log("useeffect called");
  //     fetch('https://dummyjson.com/products/category/smartphones')
  //     .then(res => res.json())
  //     .then(x=> {setCategories(x);console.log(x)});
  // },[]);

  //  useEffect ( async () =>{
  //     console.log("useeffect called");
  //     const res= await fetch('https://dummyjson.com/products/category/smartphones');
  //     setCategories(res.json());
  //   },[]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://dummyjson.com/products/categories`)
      let actualData = await response.json();
      setCategories(actualData)
    }
    getData()
  }, [])



  return (
    <>
      <nav className="breadcrumb container">
        <a className="breadcrumb-item" href="/">Home</a>
        <span className="breadcrumb-item active">Categories</span>
      </nav>

      <div className="container">


        <div className="row">
          <div className="col-12">

            {categories != null && categories.map((x, index) =>
              <Link to={`/products/${x.slug}`} className="breadcrumb-item" key={index}>{x.name}</Link>
            )}

          </div>
        </div>


      </div>
    </>
  )
}

export default Categories

