import React from 'react';
import '../styles/AddToCartButton.css';

const AddToCartButton = (props) => <div className='addToCartButton'><button onClick={() => props.addToCart(props.addItem.id)}>Add to cart</button></div>

export default AddToCartButton;