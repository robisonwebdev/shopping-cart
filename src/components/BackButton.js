import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
    return (
        <div className='backButton'>
            <Link to='/shop'><button>Go Back</button></Link>
        </div>
    );
}

export default BackButton;