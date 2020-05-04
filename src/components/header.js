import React from 'react';
import "../styles/header.css"
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <ul className="header-ul">
                <li className="header-li"><Link exact to="/">Home</Link></li>
                <li className="header-li"><Link exact to="/about">About </Link></li>
                <li className="header-li"><Link exact to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header;
