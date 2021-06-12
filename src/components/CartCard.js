import React from 'react';

const CartCard = () => {
    return (
        <div className='cartCard'>
            <div className='cartCardProduct'>
                <img className='cartCardImage' />
                <div className='cartCardDetails'>
                    <h3></h3>
                    <p></p>
                </div>
            </div>
            <div className='cartCardPrice'></div>
        </div>
    );
}

export default CartCard;