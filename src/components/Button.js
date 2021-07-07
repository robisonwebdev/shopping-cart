import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BackButton.css';

const Button = ({ text, link }) => <Link to={link}><button className='backButton'>{text}</button></Link>

export default Button;