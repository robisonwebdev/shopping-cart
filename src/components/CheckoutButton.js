import React from 'react';
import '../styles/CheckoutButton.css';

function checkoutAlert() {
    alert('Thanks for trying my mockup shopping site.');
}

const CheckoutButton = () => {
    return (
        <button className='checkoutButton' onClick={() => {checkoutAlert()}}>Checkout</button>
    );
}

export default CheckoutButton;