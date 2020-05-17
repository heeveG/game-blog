import React, {Component} from 'react'
import {AUTH_TOKEN} from '../constants'
import {Mutation} from 'react-apollo'
import {gql} from "apollo-boost";
import "../styles/login.css"

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`


class Login extends Component {
    state = {
        login: true, // switch between Login and SignUp
        email: '',
        password: '',
        name: '',
    };

    render() {
        const {login, email, password, name} = this.state;
        return (
            <div className="login-page">
                <div className="myform">
                    <form action="" method="post" name="login">
                        <div className="form-group">
                            {!login && (
                                <input value={name}
                                       onChange={e => this.setState({name: e.target.value})}
                                       type="text"
                                       placeholder="Your name" className="form-control my-input" id="name"
                                />
                            )}
                        </div>
                        <div className="form-group">
                            <input value={email}
                                   onChange={e => this.setState({email: e.target.value})}
                                   type="text"
                                   placeholder="Your email address" className="form-control my-input" id="email"
                            />
                        </div>
                        <div className="form-group">
                            <input value={password}
                                   onChange={e => this.setState({password: e.target.value})}
                                   type="password"
                                   placeholder={login ? "Your password" : "Choose a safe password"}
                                   className="form-control my-input"/>
                        </div>
                        <Mutation
                            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                            variables={{email, password, name}}
                            onCompleted={data => this._confirm(data)}
                        >
                            {mutation => (
                                <div className="text-center ">
                                    <div type="submit"
                                         className="button pointer mr2 btn btn-block send-button tx-tfm"
                                         onClick={mutation}>{login ? 'Log in' : 'Sign up'}
                                    </div>
                                </div>
                            )}
                        </Mutation>
                        <div className="col-md-12 ">
                            <div className="login-or">
                                <hr className="hr-or"/>
                            </div>
                        </div>
                        <div className="text-center ">
                            <button type="submit"
                                    className="pointer mr2 btn btn-block  tx-tfm send-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({login: !login})
                                    }}>{login ? 'Or create new account for free' : 'Already have an account?'}
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        )
    }

    _confirm = async data => {
        const {token} = this.state.login ? data.login : data.signup;
        this._saveUserData(token);
        this.props.history.push(`/`)
    };

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default Login