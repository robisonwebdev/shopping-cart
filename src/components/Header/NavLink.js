import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header/NavLink.css';

const NavLink = ({ linkTo, title  }) => {
    return (
        <Link to={linkTo}>
            <li className='nav_link'>{title}</li>
        </Link>
    );
};

export default NavLink;