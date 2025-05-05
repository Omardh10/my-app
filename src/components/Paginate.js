import React from 'react'
import ReactPaginate from 'react-paginate';
import './pag.css'
const Paginate = ({getpage}) => {
    const handelpagecount=(data)=>{
       getpage(data.selected+1)
    }
    const pagecount=500;
  return (
    <div className='paged'>
      <ReactPaginate 
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handelpagecount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pagecount}
      previousLabel="السابق"
      containerClassName={"pagination justfy-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
      />
    </div>
  )
}

export default Paginate;
