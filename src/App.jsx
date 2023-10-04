// import axios from "axios"
import Navbar from "./compont/navBar/Navbar";
import MoveList from "./compont/MOveList/MoveList";
// import { useEffect, useState } from "react";
import {  HashRouter, Route, Routes } from "react-router-dom"
import MoveDetails from "./compont/movieDetails/MoveDetails";
import Register from "./compont/register/Register";
import Login from "./compont/login/Login";
// import Register from "./compont/register/Register";
// import { useDispatch, useSelector}  from "react-redux";
// import {getAllMovies} from "./redux/action/moviesAction"
function App() {
  // let [movies,setmovies]=useState([])

  // let [pagecount,setpagecount]=useState(0)

  // const getData=async()=>{
  //   const {data}=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=2ddbe152239bf077c9982ea65139ddc7&language=ar")
  //   console.log(data.results)
  //   setmovies(data.results)
  //   setpagecount(data.total_pages)

  // }

  // const dispath=useDispatch();
  // useEffect(()=>{
  //   // getData()
  //   dispath(getAllMovies())
  // },[])
  // const data=useSelector((state)=>state.movies)

  // useEffect(()=>{
  //   setmovies(data)

  // },[data])
  // const getPage=async (page)=>{
  //   const {data}=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2ddbe152239bf077c9982ea65139ddc7&language=ar&page=${page}`)
  //   setmovies(data.results)
  //   setpagecount(data.total_pages)
  // }


  // const search=async(word)=>{
  //   if(word===""){
  //     getAllMovies()
  //   }else{
  //     const {data}=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2ddbe152239bf077c9982ea65139ddc7&query=${word}&language=ar`)
  //     setmovies(data.results) 
  //     setpagecount(data.total_pages)
  //   }
  // }

  return (
    <div className="font">
      <Navbar />
      <div className="">
        <HashRouter>
          <Routes> 
              <Route path="/" element={<MoveList/>}/>
              <Route path="/movie/:id" element={<MoveDetails />}/>
              <Route path="/register/Register.jsx" element={<Register />}/>
              <Route path="/login/Login.jsx" element={<Login />}/>
          </Routes>
        </HashRouter>
      </div>
      
      
    </div>
  );
}

export default App;
