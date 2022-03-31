import React from 'react';
import '../../../styles/Main/Product/AddToCartButton.css';

const AddToCartButton = ({ cartItems, product, setCartItems }) => {
    const addToCart = (prod) => {
        const isProductInCart = cartItems.some(item => item.id === prod.id);        

        if (!isProductInCart) {
            prod.quantity = 1;
            setCartItems(prevState => [...prevState, prod]);
        };

        if (isProductInCart) {
            const updateQuantity = cartItems.map(item => {
                if (item.id === prod.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
    
                return item;
            });

            setCartItems(updateQuantity);
        };
    };

    return (
        <div className='add_to_cart'>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default AddToCartButton;