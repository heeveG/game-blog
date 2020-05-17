import React, {Component} from 'react'
import "../../styles/subheader.css"
import {NavLink} from 'react-router-dom';
import blog from '../../img/icons8-comments-100.png';
import roulette_img from '../../img/icons8-roulette-100.png';
import {AUTH_TOKEN} from '../../constants'
import {withRouter} from 'react-router-dom'

class Subheader extends Component {

    render() {

        const authToken = localStorage.getItem(AUTH_TOKEN);
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

                {authToken ? (
                    <div
                        className="ml1 pointer black"
                        onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN);
                            this.props.history.push(`/`)
                        }}
                    >
                        <button className="auth-button auth-button logout">

                            Log out
                        </button>

                    </div>
                ) : (

                    <NavLink to="/login" className="nav  auth-button login">
                            Log in

                    </NavLink>

                )
                }

            </div>
        )
    }
}

export default withRouter(Subheader);