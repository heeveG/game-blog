import React, {Component} from 'react';
import {gql} from 'apollo-boost';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        errors: {
            username: '',
            email: '',
            password: '',
        }
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const {errors} = this.state;
        if (errors.username || errors.email || errors.password) {
            console.log("form is invalid");
        }
        console.log(this.state, e);
       const response =  await this.props.mutate({
                variables: this.state,
            }
        );
        console.log(response);

    };

    validate(ev) {
        const {username, email} = ev.target;

        if (username.length < 2) {
            this.setState({errors: {...this.state.errors, username: "Name is too short"}});
        }

    }


    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input name="username" value={this.state.username} onChange={e => this.onChange(e)}
                           onBlur={e => this.validate(e)}/>
                </div>
                <div>
                    <label htmlFor="email">email: </label>
                    <input name="email" value={this.state.email} onChange={e => this.onChange(e)}
                           onBlur={e => this.validate(e)}/>
                </div>
                <div>
                    <label htmlFor="password">password: </label>
                    <input name="password" value={this.state.password} onChange={e => this.onChange(e)}
                           onBlur={e => this.validate(e)}/>
                </div>
                <input type="submit" value="Save"/>
            </form>
        );
    }
}

const mutation = gql`
mutation register(
    $username: String!
    $email: String!
    $password: String!
)
{
    register(
        registerInput: {
            username: $username
            username: $email
            username: $password
        }
    )
    {
        id email username createdAt token
    }
}
`;

export default Register;