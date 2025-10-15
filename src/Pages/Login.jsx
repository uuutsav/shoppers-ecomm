import React from 'react'
import './styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <div className="login-container">
                <h1>Login</h1>
                <form id='login'>
                    <input type="email" name="mail" id="mail" placeholder='Email Address' required autoFocus />
                    <input type="password" name="password" id="password" placeholder='Password' required />
                    <input type="submit" value="Login" id="submit" />
                </form>
                <p>New User? <Link to='/signup'>Sign up</Link></p>
            </div>
        </div >
    )
}

export default Login