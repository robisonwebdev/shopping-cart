import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BackButton.css';

const BackButton = (props) => {
    return (
        <div className='backButton'>
            <Link to='/shop'><button>{props.text}</button></Link>
        </div>
    );
}

export default BackButton;