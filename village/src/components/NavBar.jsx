import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = props => {
    return (
        <nav>
            <NavLink exact to='/'>Smurfs</NavLink>
            <NavLink to='/add-smurf'>Add Smurf</NavLink>
        </nav>
    )
}

export default NavBar;