import React, { useEffect, useState } from 'react';
import '../../../styles/Main/Cart/CartCard.css';

const CartCard = ({ cartItems, item, setCartItems }) => {
    const { image, price, quantity, title } = item;
    const [itemQuantity, setItemQuantity] = useState(quantity);

    const onChange = (event) => {
        setItemQuantity(parseInt(event.target.value));
    };

    const getSubtotal = () => {
        return (quantity * price).toFixed(2);
    };

    const updateCart = () => {
        const newItemQuantity = cartItems.map(obj => {
            if (obj.id === item.id) {
                return {...obj, quantity: itemQuantity};
            };

            return obj;
        });

        setCartItems(newItemQuantity);
    };

    useEffect(() => {
        updateCart();
    }, [itemQuantity]);

    return (
        <tr className='cart_card'>
            <td><img src={image} alt={title} /></td>
            <td className='td_product'><h4>{title}</h4></td>
            <td><p>{price}</p></td>
            <td><input onChange={onChange} type='number' value={itemQuantity} /></td>
            <td><p>{getSubtotal()}</p></td>
        </tr>
    );
};

export default CartCard;