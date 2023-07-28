import React from 'react';
import {NavLink} from "react-router-dom";


export const Navbar = (props) => {
    return (
        <div className='nav'>
            <div className='cover'>Cover</div>
            <ul className='nav-item'>
                <li className='nav-link'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to='/Features'>
                       Features
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to='/Contacts'>
                        Contacts
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

