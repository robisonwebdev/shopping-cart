import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartButton.css';

const CartButton = (props) => {
    return (
        <Link to='/cart'><button className='cartButton'>{props.text}</button></Link>
    );
}

export default CartButton;