/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/robbin profile.png'
import HeaderSocials from './headersocials'

const Header = () => {
    return (
       <header>
        <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>Robbin Collins JR</h1>
            <h5 className="text-light">Fullstack software enginneer/sales</h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src={ME} alt="profile-picture" />
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
        </header>
    )
}

export default Header