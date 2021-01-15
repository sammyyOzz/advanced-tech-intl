import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import NavDrawer from './NavDrawer'


function Header() {
    return (
        <div className="header">
            <NavLink to="/">
                <div className="header__image">
                    <img src={require('../images/adtechLogo.png')} alt="Logo"/>
                </div>
            </NavLink>

            <div className="header__nav">
                <NavLink exact to="/" className="header__link" activeStyle={{ color: 'rgb(10, 233, 10)' }}>
                    Home
                </NavLink>
                {/* <NavLink to="#" className="header__link">
                    About Us
                </NavLink> */}
                <NavLink to="/products" className="header__link" activeStyle={{ color: 'rgb(10, 233, 10)' }}>
                    Products
                </NavLink>
                {/* <NavLink to="#" className="header__link">
                    Services
                </NavLink>
                <NavLink to="#" className="header__link">
                    Partners
                </NavLink> */}
                <NavLink to="/contact" className="header__link" activeStyle={{ color: 'rgb(10, 233, 10)' }}>
                    Contact Us
                </NavLink>
            </div>

            <div className="header__right">
                {/* <div className="header__rightBtn">
                    <button>Request for quote</button>
                </div> */}

                <div className="header__mobileMenuIcon">
                    <NavDrawer />
                </div>

            </div>

        </div>
    )
}

export default Header
