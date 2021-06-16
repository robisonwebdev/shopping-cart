import React, { useEffect, useState } from 'react';
import '../styles/QuantityControl.css';

const QuantityControl = (props) => {
    const [inputValue, setInputValue] = useState(props.quantity);

    useEffect(() => {
        props.quantityChange(props.id, inputValue);
    }, [inputValue])

    function onSubmit(e) {
        e.preventDefault();
    };

    return (
        <form className='quantityControl' onSubmit={onSubmit}>
            {/* <button onClick={() => props.decrease(props.id)}>-</button> */}
            <input type='number' value={inputValue} onChange={event => setInputValue(parseInt(event.target.value))} />
            {/* <button onClick={onIncrease}>+</button> */}
        </form>
    );
}

export default QuantityControl;