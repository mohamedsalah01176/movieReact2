import React from 'react'
import style from "./Navbar.module.css"
import { useDispatch } from 'react-redux'
import { getAllMovies, getSearch } from '../../redux/action/moviesAction'

export default function Navbar() {
    const onsearch =(word)=>{
        search(word)
    }

    const dispatch=useDispatch();
    const search=async(word)=>{
        if(word===""){
            dispatch( getAllMovies())
        }else{
            dispatch(getSearch(word))            
        }
    }
    function logout(){
        window.localStorage.removeItem("email")
        window.location.pathname="/login/Login.jsx"
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className={` ${style.nav} navbar-brand mx-5 fs-4 fw-700`} href="/">MS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <form className="form-inline my-2 my-lg-0 d-flex w-75">
                        <input onChange={(e)=>onsearch(e.target.value)} className={`form-control mr-sm-2 `} type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>{
                    !window.localStorage.getItem("email")?<>
                    <a className='btn btn-success' href="../login/Login.jsx">login</a>
                    <a className='btn btn-info' href="../register/Register.jsx">Regiter</a>
                    </>:
                    <a className='btn btn-info' onClick={logout} href="/login/Login.jsx">Logout</a>

                }
            </nav>
        </div>
    )
}
