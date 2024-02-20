import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Pagination = ({totalRecords, recordsPerPage, setCurrentPage, currentPage, pageLink}) => {

   const [pageNumberLimit] = useState(10);
   const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);
   const [maxpageNumberLimit, setMaxPageNumberLimit] = useState(10);
  

     let pages = [];
     for (let i =1; i <= Math.ceil(totalRecords / recordsPerPage); i++){
        pages.push(i);       
     }


const handleNextClick = () => {
    setCurrentPage(currentPage+1);
    if (currentPage+ 1 > maxpageNumberLimit){
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        setMaxPageNumberLimit(maxpageNumberLimit + pageNumberLimit);
       
    }
}

const handlePreviousClick = () => {
    setCurrentPage(currentPage-1);
    if ( (currentPage - 1) % pageNumberLimit===0){
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        setMaxPageNumberLimit(maxpageNumberLimit - pageNumberLimit);
        
    }
}

let pageIncrementDOTS = null;
if (pages.length > maxpageNumberLimit) {
    pageIncrementDOTS = <li className="page-item"><Link className="page-link" onClick={handleNextClick}>&hellip;</Link></li>
}


let pageDecrementDOTS = null;
if ( minPageNumberLimit > 1) {
    pageDecrementDOTS = <li className="page-item"><Link className="page-link" onClick={handlePreviousClick}>&hellip;</Link></li>
}
//console.log(pages);

  return (
     
        <ul className="pagination float-right mt-3">

         
            <li className="prev" >
                <button className="page-link" to={pageLink} aria-label="Previous" onClick={handlePreviousClick} disabled={ currentPage === 1 ? true : false}>
                <span aria-hidden="true" className="la la-arrow-left"></span>
                <span className="sr-only">Previous</span>
                </button>
            </li>
            {pageDecrementDOTS}
                {pages.map((page, index) => {
                    if (page < (maxpageNumberLimit +1) && page >= minPageNumberLimit) {
                        return (
                                <li  className={page === currentPage ? "page-item active" : "page-item"}  key={index}>
                                    <Link className="page-link" to={pageLink} onClick={() => setCurrentPage(page)}>{page}</Link>
                                </li>
                            )
                    } else return null;
                })}
            {pageIncrementDOTS}  
            <li className="next">
                <button className="page-link" to={pageLink} aria-label="Next" onClick={handleNextClick} disabled={ currentPage === pages.length ? true : false}>
                <span aria-hidden="true" className="la la-arrow-right"></span>
                <span className="sr-only">Next</span>
                </button>
            </li>
        </ul>
   
  )
}

export default Pagination
