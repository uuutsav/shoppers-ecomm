import React from 'react'
import './Footer.css'
import logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>SHOPPERS</p>
            </div>
            <ul className="links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="social">
                <img src={instagram} alt="" />
                <img src={pinterest} alt="" />
                <img src={whatsapp} alt="" />
            </div>
            <div className="copyright">
                <hr />
                <p>Copyright &copy; 2023 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer