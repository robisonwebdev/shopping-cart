import React from 'react';

const TotalPrice = ({ cartItems }) => {
    const getTotal = () => {
        let total = 0;

        cartItems.forEach(item => {
            let price = item.price;
            let quantity = item.quantity;
            let subtotal = price * quantity;
    
            total += subtotal;
        });
    
        return total.toFixed(2);
    };

    return (
        <div className='total_price'>
            {/* <h3>{`Total: $${getTotal()}`}</h3> */}
        </div>
    );
}

export default TotalPrice;