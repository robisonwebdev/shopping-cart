import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h3>Temp Site Name</h3>
            <ul id='navLinks'>
                <li>Home</li>
                <li>Shop</li>
                <li>Cart</li>
            </ul>
        </nav>
    );
};

export default Navbar;