import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    let location = useLocation();
    const { getTotalItems } = useContext(ShopContext);

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>SHOPPERS</p>
            </div>
            <ul className='menu'>
                <li><Link to='/'>Shop</Link>{location.pathname === '/' ? <hr /> : ''}</li>
                <li><Link to='/men'>Men</Link>{location.pathname === '/men' ? <hr /> : ''}</li>
                <li><Link to='/women'>Women</Link>{location.pathname === '/women' ? <hr /> : ''}</li>
                <li><Link to='/kids'>Kids</Link>{location.pathname === '/kids' ? <hr /> : ''}</li>
            </ul>
            <div className="loginCart">
                <button><Link to='/login'>Login</Link></button>
                <Link to='/cart'><img src={cart} alt="cart" /></Link>
                <div className="count">{getTotalItems()}</div>
            </div>
        </nav>
    )
}

export default Navbar