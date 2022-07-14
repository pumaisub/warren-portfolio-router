import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = { clicked: false }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
//<i className="fab fa-react"></i>
//<Button>Sign Up</Button>
    render() {
        return(
            <nav className="NavbarItems">
                <Link to={''} style={{ textDecoration: 'none' }} >
                    <h1 className="navbar-logo">WARREN DE LOS SANTOS</h1>
                    
                </Link>
                

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <Link to={item.route} style={{ textDecoration: 'none' }}>
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}    
                                    </a>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}


export default Navbar 