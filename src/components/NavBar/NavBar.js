import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'
import {Header,Ul} from './NavbarStyled';

export default function NavBar() {
    return (
        <Header className="navbar">
            <div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                <h1>Movie App</h1>   
            </div>
            <nav>
                <Ul className="list">
                    <li>
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favorites</NavLink>
                    </li>
                </Ul>
            </nav>
        </Header>
    )
}