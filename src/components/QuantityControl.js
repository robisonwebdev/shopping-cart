import React from 'react';
import '../styles/QuantityControl.css';

const QuantityControl = () => {
    return (
        <form className='quantityControl'>
            <button>-</button>
            <input type='number' />
            <button>+</button>
        </form>
    );
}

export default QuantityControl;