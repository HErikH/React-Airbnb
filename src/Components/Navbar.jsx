import React from 'react';
import logo from '../img/airbnb.png';
function Navbar() {
    return ( 
        <nav className='nav'>
            <img className='nav__logo' src={logo} alt="logo" />
        </nav>
     );
}

export default Navbar;