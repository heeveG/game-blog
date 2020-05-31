import React from 'react';
import "../../styles/header.css"
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="header  navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav mr-auto">
                <li className=" nav-item "><Link exact="true" to="/">Home</Link></li>
                <li className=" nav-item "><Link exact="true" to="/about">About </Link></li>
                <li className=" nav-item "><Link exact="true" to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header;
