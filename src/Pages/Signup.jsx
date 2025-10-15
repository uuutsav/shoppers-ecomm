import React from 'react'
import './styles/Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='signup'>
            <div className="signup-container">
                <h1>Sign up</h1>
                <form id='signup'>
                    <input type="text" name="name" id="name" placeholder='Name' required autoFocus />
                    <input type="email" name="mail" id="mail" placeholder='Email Address' required />
                    <input type="password" name="password" id="password" placeholder='Password' required />
                    <div className='check'>
                        <input type="checkbox" name="check" id="check" required />
                        <label>By continuing, I agree to the terms of use & privacy policy</label>
                    </div>
                    <input type="submit" value="Sign up" id="submit" />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    )
}

export default Signup