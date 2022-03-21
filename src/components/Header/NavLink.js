import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header/NavLink.css';

const NavLink = ({ linkTo, title  }) => {
    return (
        <Link className='nav_link' to={linkTo}>
            <li>{title}</li>
        </Link>
    );
};

export default NavLink;