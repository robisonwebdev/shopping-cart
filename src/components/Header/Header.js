import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const Header = () => {
    return (
        <header>
            <nav>
                <div className='nav_title'>
                    <NavLink linkTo={'#'} title={`Birdie's Bird Houses`} />
                </div>
                <ul className='nav_links'>
                    <NavLink linkTo={'#'} title='Home' />
                    <NavLink linkTo={'#'} title='Shop' />
                    <NavLink linkTo={'#'} title='Cart' />
                </ul>
            </nav>
        </header>
    );
};

export default Header;