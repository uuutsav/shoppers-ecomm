import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <form className='newsletter-input'>
                <input type="email" name="email" id="email" placeholder='Enter your email' required />
                <input type="submit" id='newsletter-submit' value="Subscribe" />
            </form>
        </div>
    )
}

export default Newsletter