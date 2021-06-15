import React from 'react';
import '../styles/QuantityControl.css';

const QuantityControl = (props) => {
    function onSubmit(e) {
        e.preventDefault();
    };

    return (
        <form className='quantityControl' onSubmit={onSubmit}>
            <button>-</button>
            <input type='number' />
            <button onClick={() => props.increase(props.id)}>+</button>
        </form>
    );
}

export default QuantityControl;