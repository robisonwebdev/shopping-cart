import React from 'react';
import '../../../styles/Main/Product/AddToCartButton.css';

const AddToCartButton = ({ addToCart, product }) => {
    return (
        <div className='add_to_cart'>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default AddToCartButton;