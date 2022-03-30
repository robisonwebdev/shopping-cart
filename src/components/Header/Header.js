import React from 'react';
import NavLink from './NavLink';
import '../../styles/Header/Header.css';

const Header = ({ cartQuantity }) => {
    return (
        <header>
            <nav>
                <ul className='nav_title'>
                    <NavLink linkTo={'/'} title={`Birdie's Bird Houses`} />
                </ul>
                <ul className='nav_links'>
                    <NavLink linkTo={'/'} title='Home' />
                    <NavLink linkTo={'/shop'} title='Shop' />
                    <NavLink linkTo={'/cart'} title='Cart' value={cartQuantity} />
                </ul>
            </nav>
        </header>
    );
};

export default Header;