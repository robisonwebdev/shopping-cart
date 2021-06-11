import React from 'react';
import '../styles/CartButton.css';

const CartButton = (props) => {
    return (
        <button>{props.text}</button>
    );
}

export default CartButton;