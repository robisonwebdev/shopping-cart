import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header/NavLink.css';

const NavLink = ({ linkTo, title, value }) => {
    return (
        <Link className='nav_link' to={linkTo}>
            <li>{value === undefined ? title : `${title} (${value})`}</li>
        </Link>
    );
};

export default NavLink;