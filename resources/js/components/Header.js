import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import NavDrawer from './NavDrawer'


function Header() {
    return (
        <div className="header">
            <Link to="/">
                <div className="header__image">
                    <img src={require('../images/adtechLogo.png')} alt="Logo"/>
                </div>
            </Link>

            <div className="header__nav">
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <div className="header__link">
                        Home
                    </div>
                </Link>
                <Link to="#" style={{ textDecoration: 'none'}}>
                    <div className="header__link">
                        About Us
                    </div>
                </Link>
                <Link to="/products" style={{ textDecoration: 'none'}}>
                    <div className="header__link">
                        Products
                    </div>
                </Link>
                <Link to="#" style={{ textDecoration: 'none'}}>
                    <div className="header__link">
                        Services
                    </div>
                </Link>
                <Link to="#" style={{ textDecoration: 'none'}}>
                    <div className="header__link">
                        Partners
                    </div>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none'}}>
                    <div className="header__link">
                        Contact Us
                    </div>
                </Link>
            </div>

            <div className="header__right">
                <div className="header__rightBtn">
                    <button>Request for quote</button>
                </div>

                <div className="header__mobileMenuIcon">
                    <NavDrawer />
                </div>

            </div>

        </div>
    )
}

export default Header
