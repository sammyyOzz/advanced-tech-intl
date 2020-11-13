import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className="header">
            <div className="header__image">
                <img src={require('../images/adtechLogo.png')} alt="Logo"/>
            </div>

            <div className="header__nav">
                <div className="header__link">
                    Home
                </div>
                <div className="header__link">
                    About Us
                </div>
                <div className="header__link">
                    Products
                </div>
                <div className="header__link">
                    Services
                </div>
                <div className="header__link">
                    Partners
                </div>
                <div className="header__link">
                    Contact Us
                </div>
            </div>

            <button>Request for quote</button>

        </div>
    )
}

export default Header
