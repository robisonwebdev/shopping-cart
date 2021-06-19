import React, { useEffect, useState } from 'react';
import '../styles/QuantityControl.css';

const QuantityControl = (props) => {
    const [inputValue, setInputValue] = useState(props.quantity);
    const { quantityChange } = props;

    useEffect(() => {
        quantityChange(props.id, inputValue);
    }, [inputValue])

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