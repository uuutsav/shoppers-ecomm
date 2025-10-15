import React from 'react'
import './Hero.css'
import hand from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png'
import hero from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <span>new</span>
                    <img className='hand' src={hand} alt="hand" />
                </div>

                <p>collections</p>
                <p>for everyone</p>
                <div className="latest">
                    <p><a href="#latest">Latest Collection</a></p>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
            <div className="right">
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default Hero