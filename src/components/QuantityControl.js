import React, { useEffect, useState } from 'react';
import '../styles/QuantityControl.css';

const QuantityControl = (props) => {
    const { quantity, quantityChange, id } = props;
    const [inputValue, setInputValue] = useState(quantity);

    useEffect(() => {
        quantityChange(id, inputValue);
    }, [inputValue, id])

    function onSubmit(e) {
        e.preventDefault();
    };

    return (
        <form className='quantityControl' onSubmit={onSubmit}>
            <input type='number' value={inputValue} onChange={event => setInputValue(parseInt(event.target.value))} />
        </form>
    );
}

export default QuantityControl;