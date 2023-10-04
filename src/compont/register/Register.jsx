import React, { useState } from 'react'
import "./register.css"
import axios from 'axios'
export default function Register() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [accept,setAccept]=useState(false)
    const [error,setError]=useState(false)

    
    let flag=false

    async function submit(e){
        e.preventDefault()
        setAccept(true)
        if(name.length <3 && password.length<8){
            flag=false
        }else{
            flag=true
        }
        try{
            if(flag){
                let res= await axios.post("http://127.0.0.1:8000/api/register",{
                    name:name,
                    email:email,
                    password:password,
                    password_confirmation:password
                })
                if(res.status === 200){
                    localStorage.setItem("email",email)
                    window.location.pathname="/login/Login.jsx"
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
                        <h3 className="title"> Name</h3>
                        <input type="text" placeholder="Frist Name" onChange={(e)=>setName(e.target.value)}/>
                        {name.length <3 && accept?<div className="alert alert-danger" role="alert">name is more 3 </div>:""}
                    </div>
                    
                    <div className="box">
                        <h3 className="title">Email</h3>
                        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        {accept && error ===422?<div className="alert alert-danger" role="alert">Email is alraedy token</div>:""}
                    </div>
                    <div className="box">
                        <h3 className="title">Password</h3>
                        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                        {password.length <8 && accept?<div className="alert alert-danger" role="alert">password is more 8 </div>:""}
                    </div>
                    <button type='submit' className='btn btn-outline-info mb-2'>Regiter</button>
                </div>
            </form>
        </div>
        
    
  )
}
