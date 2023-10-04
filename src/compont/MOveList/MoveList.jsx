import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Pagination from '../pagination/pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/action/moviesAction';

export default function MoveList() {
    let [movies,setmovies]=useState([])

    const dispath=useDispatch();
    useEffect(()=>{
      // getData()
        dispath(getAllMovies())
    },[])
    const data=useSelector((state)=>state.movies)

    useEffect(()=>{
        setmovies(data)
    },[data])
    
    return (
        
        <div className='row' style={{height:"100%"}}>
            {movies.length?movies.map((mov,index)=>{
                return(<Card key={index} mov={mov} />)
            }):<h2>no found</h2>}
            <Pagination />
        </div>
    )
}
