import React, { useState, useEffect } from "react";

const Categories = () => {
   const [categories, setCategories]= useState([]);

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
        console.log(actualData) 
        setCategories(actualData)
      }
      getData()
    }, [])



 console.log("here")
  return (
    <>
    {/* {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (response !=null && response.products.map(data => <div>{data}</div>)))} */}
    {/* categories are hew now: {categories.products[1].title} */}
    { categories != null && categories.map(x => <h1>${x}</h1> )}
    
          </>
  )
}

export default Categories

