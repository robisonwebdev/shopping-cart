import React from 'react';

const CartCard = () => {
    return (
        <div className='cartCard'>
            <div className='cartCardProduct'>
                <img className='cartCardImage' />
                <div className='carCardDetails'></div>
            </div>
            <div className='cartCardPrice'></div>
        </div>
    );
}

export default CartCard;