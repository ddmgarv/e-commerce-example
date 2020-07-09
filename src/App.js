import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';
import Header from './components/header/Header';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                {/* <Route path='/hats' component={HatsPage} /> */}
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInSignUp} />
            </Switch>
        </div>
    );
}

export default App;
