import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <h1>Birdie's Bird Houses</h1>
            <p>Magna ea irure officia aliquip tempor amet pariatur occaecat nostrud proident qui magna.</p>
            <Button text='View Products' link='/shop' className='viewProducts' />
        </div>
    );
}

export default Home;