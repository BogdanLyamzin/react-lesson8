import React from 'react'
import {Link} from "react-router-dom";
import "./NavbarMenuItem.css";

const NavbarMenuItem = ({href, text, handleClick}) => {
    return (
        <li className="navbar-menu-item">
            <a href = {href} className="navbar-menu-link"
                onClick={handleClick}>{text}</a>
        </li>
    )
}

export default NavbarMenuItem;