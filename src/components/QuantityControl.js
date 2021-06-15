import React from 'react';
import '../styles/QuantityControl.css';

const QuantityControl = (props) => {
    function onSubmit(e) {
        e.preventDefault();
    };

    return (
        <form className='quantityControl' onSubmit={onSubmit}>
            <button onClick={() => props.decrease(props.id)}>-</button>
            <input type='number' value={props.quantity} />
            <button onClick={() => props.increase(props.id)}>+</button>
        </form>
    );
}

export default QuantityControl;