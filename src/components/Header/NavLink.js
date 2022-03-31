import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header/NavLink.css';

const NavLink = ({ linkTo, title, value }) => {
    const getValue = () => {
        if (value >= 1) return `${title} (${value})`;

        return title;
    };

    return (
        <Link className='nav_link' to={linkTo}>
            <li>{value === undefined ? title : getValue()}</li>
        </Link>
    );
};

export default NavLink;