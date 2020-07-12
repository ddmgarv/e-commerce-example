import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import './signInSignUp.scss';

const SignInSignUp = () => {
    return (
        <div className='signInSignUp'>
            <SignIn />
            <SignUp />
        </div>
    );
};
export default SignInSignUp;
