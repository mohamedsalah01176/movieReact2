/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import style from "./MoveDetails.module.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function MoveDetails() {
    const params=useParams()
    const [movie,setMovie]=useState([])
    const getMoviesDetaile=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=2ddbe152239bf077c9982ea65139ddc7&language=ar`)
        console.log(data)
        setMovie(data)
    
    }
    useEffect(()=>{
        getMoviesDetaile();
    },[])
    
    return (
        <div >
            <div className={`row ${style.background} mx-0 my-3`}>
                <div className="col-md-12 d-flex">
                    <div className=" w-75 fs-4 fw-700 d-flex flex-column align-items-center justify-content-center">
                        <p>اسم الفلم:{movie.title}</p>
                        <p>تاريخ الفيلم:{movie.release_date}</p>
                        <p>عدد المقيمين:{movie.vote_count}</p>
                        <p>التقيم:{movie.vote_average}</p>
                    </div>
                    <div className={`image w-25 d-flex align-items-center `}>
                        <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} className={`w-100 ${style.image} `} alt="kkk" />
                    </div>
                </div>
            </div>
            <div className={`row ${style.background} mx-0`}>
                <h2 className='text-end'>:القصة</h2>
                <p className='text-end pe-5'>{movie.overview}</p>
            </div>
            <div className=" d-flex flex-row justify-content-center mx-0">
                <Link to="/">
                    <button className={`btn btn-danger  m-1`}>الصفحه الرئيسيه</button>
                </Link>
                <a href={movie.homepage}>
                    <button className={`btn btn-success  m-1`}>مشاهده الفليم</button>
                </a>
            </div>
        </div>
    )
}
