import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';
import Header from './components/header/Header';
import { auth } from './firebase/utils';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ currentUser: user });
            } else {
                this.setState({ currentUser: null });
            }
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
