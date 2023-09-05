import React from 'react'
import {useState}from 'react-dom'
import axios from 'axios'
import {useCookies}from 'react-cookie'
import '../App.css';

function Login() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const [_,setCookies]=useCookies(['access_token'])

    const onSubmit=async (e)=>{
        e.preventDefault();
        const response = await axios.post('http://localhost:9000/login',{
            username,password
        })
        setCookies('access_token',response.data.token)
        window.localStorage.setItem('userID',response.data.adminId)
        console.log(response)
    }
  return (
    <div className='loginPage'>
    <form onSubmit={onSubmit} className='card' >
            <h2>Login</h2>
            <div className="form-group">
                <input
                type='text'
                id='username'
                value={username}
                onChange={e=> setUsername(e.target.value)}
                className='editInputRegister'
                placeholder='User Name'
                />
                <input
                type='password'
                id='username'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='editInputRegister' 
                placeholder='password'
                /> 
                <input 
                type='submit'
                value='Login'
                id='signin'
                />
            </div>
        </form>
    </div>
  )
}

export default Login
