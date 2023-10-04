import React from 'react'
import style from "./Card.module.css"
import { Link } from 'react-router-dom'
export default function Card({mov}) {
    return (
        <div className={`${style.card} col-ms-12 col-md-4 col-lg-3 my-1`}>
            <Link to={`/movie/${mov.id}`}>
                <img className={`${style.img}`} src={`https://image.tmdb.org/t/p/w500`+mov.poster_path} alt="" />
                <div className={`${style.card_overlay} `}>
                    <div className={`text-center w-100 p-2`}>
                        <p>اسم الفلم :{mov.title}</p>
                        <p>تاريخ الصدار:{mov.release_date}</p>
                        <p>النوع:{mov.vote_count}</p>
                        <p>التقيم:{mov.vote_average}</p>
                    </div>
                </div>
            </Link>
                
        </div>
    )
}
