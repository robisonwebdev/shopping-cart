import React from 'react';
import '../styles/QuantityControl.css';

const QuantityControl = () => {
    return (
        <div className='quantityControl'>
            <button>-</button>
            <input type='number'></input>
            <button>+</button>
        </div>
    );
}

export default QuantityControl;