import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BackButton.css';

const BackButton = (props) => {
    return (
        <Link to='/shop'><button className='backButton'>{props.text}</button></Link>
    );
}

export default BackButton;