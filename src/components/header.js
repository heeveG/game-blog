import React from 'react';
import "../styles/header.css"


function Header() {
    return (
        <div className="header">
            <ul className="header-ul">
                <li className="header-li">Home</li>
                <li className="header-li">About</li>
                <li className="header-li">Contact</li>
            </ul>
        </div>
    )
}

export default Header;
