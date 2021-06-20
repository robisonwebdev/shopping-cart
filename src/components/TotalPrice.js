import React from 'react';

const TotalPrice = (props) => {
    const { cartItems } = props;

    function getTotal() {
        let total = 0;

        cartItems.forEach(item => {
            let price = item.price;
            let quantity = item.quantity;
            let subtotal = price * quantity;

            total += subtotal;
        });

        return total;
    }

    return (
        <div className='totalPrice'>
            <h3>{`Total: ${getTotal()}`}</h3>
        </div>
    );
}

export default TotalPrice;