import React, { Component } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { signInWithGoogle } from '../../firebase/utils';
import './signIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const { password, email } = event.target;
    }
    handleChange(event) {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const { handleSubmit, handleChange, state } = this;
        return (
            <div className='signIn'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <FormInput
                        type='email'
                        name='email'
                        label='Email'
                        value={state.email}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        label='Password'
                        value={state.password}
                        handleChange={handleChange}
                        required
                    />
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
