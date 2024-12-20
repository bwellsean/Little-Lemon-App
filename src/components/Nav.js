import '../Stylesheets/Nav.css'
import React from 'react'

const Nav = () => {
  return (

    <nav className="navbar">
        <div className="navbar-left">
            <a href="/" className="logo">
                Little Lemon
            </a>
        </div>
        <div className="navbar-center">
            <ul className='nav-links'>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/menu'>Menu</a>
                </li>
                <li>
                    <a href='/reservastions'>Reservations</a>
                </li>
                <li>
                    <a href='/order-online'>Order Online</a>
                </li>
                <li>
                    <a href='/login'>Login</a>
                </li>
            </ul>
        </div>
        <div className='navbar-right'>
            <a href='/cart' className='cart-button'>
                <i className='fas fa-cart-shopping'></i>
                <span className='cart-count'>0</span>
            </a>
        </div>

    </nav>  
    );
}

export default Nav
