import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/Buttons.css';

const Button = ({ className, linkTo, text }) => {
    return (
        <Link to={linkTo}>
            <button className={className}>{text}</button>
        </Link>
    );
};

export default Button;