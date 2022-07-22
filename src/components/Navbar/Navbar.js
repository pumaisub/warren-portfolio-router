import React,  { Component, useState } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = { clicked: false }
    
    /*this line below is from logrocket 
    const [isNavExpanded, setIsNavExpanded] = useState(false); */

    
    constructor(props){
        super(props);
        this.state = {isNavExpanded: false};
    }
    


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
                <button className="hamburger" 
                        onClick={() => {
                            this.setState(prevState => ({
                                isNavExpanded: !prevState.isNavExpanded
                              }));
                        }}
                >

                    {/* icon from heroicons.com */}
                <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     viewBox="0 0 20 20"
                     fill="white"
                >
                <path
                     fillRule="evenodd"
                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                     clipRule="evenodd"
                />
                </svg>
                </button>
                <div className={
                        this.state.isNavExpanded ? "nav-menu expanded" : "nav-menu"
                    }
                >
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
                </div>
            </nav>
        )
    }
}


export default Navbar 