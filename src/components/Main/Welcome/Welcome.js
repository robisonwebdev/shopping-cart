import React from 'react';
import Button from '../Button';
import '../../../styles/Main/Welcome/Welcome.css';

const Welcome = () => {
    return (
        <section className='welcome'>
            <h1>Birdie's Bird Houses</h1>
            <p>Magna ea irure officia aliquip tempor amet pariatur occaecat nostrud proident qui magna.</p>
            <Button
                className='welcome_button'
                linkTo='/shop'
                text='View Products'
            />
        </section>
    );
};

export default Welcome;