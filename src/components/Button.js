import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BackButton.css';

const Button = ({ text, link, className }) => <Link to={link}><button className={className}>{text}</button></Link>

export default Button;