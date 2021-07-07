import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BackButton.css';

const Button = ({ text }) => <button className='backButton'>{text}</button>

export default Button;