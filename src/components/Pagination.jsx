import React from 'react';
// import {Pagination} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const PaginationComponent = ({getPage ,pageCount}) => {
  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    getPage(data.selected + 1)
}
// https://developer.themoviedb.org/reference/search-movie
  // const pageCount = 500;
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالى"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="السابق"
    containerClassName={"pagination justify-content-center p-3"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
    />
  );
}

export default PaginationComponent;


/*
//react-bootstrap
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>

//bootstrap pagination
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

react-paginate
   // selectedPageRel
      // prevPageRel
      // prevRel
      // previousLinkClassName
      // previousClassName

      // nextRel
      // nextPageRel
      // nextLinkClassName
      // nextClassName

      // breakLinkClassName
      // breakClassName
      // breakAriaLabels
      // breakLabel
      // nextLabel
      // previousLabel

      // eventListener
      // onClick

      // ariaLabelBuilder
      // pageLabelBuilder
      // extraAriaContext

      // hrefAllControls
      // hrefBuilder
      // disabledLinkClassName
      // disabledClassName
      // activeLinkClassName
      // activeClassName
      // pageLinkClassName

      // pageClassName
      // forcePage
      // initialPage
      // onPageActive
      // onPageChange


      // className
      // disableInitialCallback
      // renderOnZeroPageCount={null}
*/