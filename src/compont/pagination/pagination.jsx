import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch,useSelector } from 'react-redux';
import { getPages } from '../../redux/action/moviesAction';
export default function Pagination() {

    let [pagecount,setpagecount]=useState(0)
    let pages=useSelector((state)=>state.pagecount)
    const dispatch=useDispatch();

    useEffect(()=>{
        setpagecount(pages)
        console.log(pages)
    },[pages])


    const getPage=async (page)=>{
        dispatch(getPages(page))
    }

    const handlePageClick=(page)=>{
        getPage(page.selected +1)
    }
    let pageCount=pagecount
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={"pagination justify-content-center my-2"}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
    )
}
