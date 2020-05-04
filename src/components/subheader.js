import React from 'react';
import "../styles/subheader.css"
import {NavLink} from 'react-router-dom';

function Subheader() {
    return (
        <div className="subheader">
            <ul className="subheader-ul">
                <li className="subheader-li"><NavLink className="nav" exact to="/">BLOGS</NavLink></li>


                <li className="subheader-li"><NavLink className="nav" to="/roulette">ROULETTE </NavLink></li>


            </ul>
        </div>
    )
}

export default Subheader;