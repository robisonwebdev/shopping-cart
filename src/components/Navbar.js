import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link className='navLink' to='/'><h3 >Birdie's Bird Houses</h3></Link>
            <ul id='navLinks'>
                <Link className='navLink' to='/'><li>Home</li></Link>
                <Link className='navLink' to='/shop'><li>Shop</li></Link>
                <Link className='navLink' to='/cart'><li>Cart</li></Link>
            </ul>
        </nav>
    );
};

export default Navbar;