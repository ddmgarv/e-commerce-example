import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
        const { password, email } = event.target;
    }
    handleChange(event) {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className='signIn'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        // value={this.state.email}
                        required
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        // value={this.state.email}
                        required
                    />
                    <input type='submit' />
                    <input type='reset' />
                </form>
            </div>
        );
    }
}

export default SignIn;
