import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/utils';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            createUserProfileDocument(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div>
                <Header currentUser={currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    {/* <Route path='/hats' component={HatsPage} /> */}
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInSignUp} />
                </Switch>
            </div>
        );
    }
}

export default App;
