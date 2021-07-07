import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BackButton.css';

const Button = ({ text }) => <Link to='/shop'><button className='backButton'>{text}</button></Link>

export default Button;