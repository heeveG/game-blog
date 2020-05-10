import React from 'react';
import "../styles/subheader.css"
import {NavLink} from 'react-router-dom';
import blog from '../img/icons8-comments-100.png';
import roulette_img from '../img/icons8-roulette-100.png';

function Subheader() {
    return (
        <div className="subheader  navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav mr-auto">
                <li><NavLink className="nav" exact to="/blog"><img className="subheader-logo"
                                                                   src={blog} alt="Logo"/>BLOGS</NavLink>
                </li>


                <li><NavLink className="nav" to="/roulette"><img className="subheader-logo"
                                                                 src={roulette_img} alt="Logo"/>ROULETTE
                </NavLink></li>


            </ul>
        </div>
    )
}

export default Subheader;