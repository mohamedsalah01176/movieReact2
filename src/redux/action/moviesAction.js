import axios from "axios"
import {AllMovies,API} from "../types/AllMovies"

export const getAllMovies=()=>{
    return async(dispatch)=>{
        const res=await axios.get(API)
        dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
    } 
}

export const getSearch=(word)=>{
    return async(dispatch)=>{
        const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2ddbe152239bf077c9982ea65139ddc7&query=${word}&language=ar`)
        dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
    } 
}

export const getPages=(page)=>{
    return async(dispatch)=>{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2ddbe152239bf077c9982ea65139ddc7&language=ar&page=${page}`)
        dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
    } 
}