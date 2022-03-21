import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ linkTo, title  }) => {
    return (
        <Link to={linkTo}>
            <li>{title}</li>
        </Link>
    );
};

export default NavLink;