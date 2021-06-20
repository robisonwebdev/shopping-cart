import React from 'react';

const TotalPrice = (props) => {
    const { price } = props;
    return (
        <div className='TotalPrice'>
            <h3>{`Total: ${price}`}</h3>
        </div>
    );
}

export default TotalPrice;