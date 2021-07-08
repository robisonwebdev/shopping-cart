import React from 'react';
import '../styles/AddToCartButton.css';

const AddToCartButton = ({addToCart, addItem}) => <div className='addToCartButton'><button onClick={() => addToCart(addItem.id)}>Add to cart</button></div>

export default AddToCartButton;