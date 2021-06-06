import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link id='navTitle' to='/'><h3 >Temp Site Name</h3></Link>
            <ul id='navLinks'>
                <li>Home</li>
                <li>Shop</li>
                <li>Cart</li>
            </ul>
        </nav>
    );
};

export default Navbar;