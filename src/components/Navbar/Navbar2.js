import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar2() {
    const navStyle = {
        color: 'white';
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link>
                    <li to="/shop">Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar 