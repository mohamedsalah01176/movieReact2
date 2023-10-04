import React, { useState } from 'react'
import "./login.css"
import axios from 'axios'
export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [accept,setAccept]=useState(false)
    const [error,setError]=useState("")
    
    let flage=true
    
    async function submit(e){
        e.preventDefault()
        setAccept(true)
        if(password.length<8){
            flage=false
        }else{
            flage=true
        }
        try{
            if(flage){
                let res=await axios.post("http://127.0.0.1:8000/api/login",{
                    email:email,
                    password:password
                })
                console.log(res);
                if(res.status ===200){
                    console.log("kkk")
                    window.location.pathname="/"
                }
            }
        }
        catch(err){
            setError(err.response.status)

        }
    }
  return (
    <div onSubmit={submit}>
        <form className="container" action="">
                <div className="bigbox">
                    <div className="box">
                        <h3 className="title">Email</h3>
                        <input type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
                        {accept && error ===422?<div className="alert alert-danger" role="alert">{error}</div>:""}
                        
                    </div>
                    <div className="box">
                        <h3 className="title">Password</h3>
                        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-outline-info mb-2'>Login</button>
                </div>
            </form>
    </div>
  )
}
