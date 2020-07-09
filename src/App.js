import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import './App.css';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

function App() {
    return (
        <div>
            {/* <HomePage /> */}
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/hats' component={HatsPage} />
                <Route path='/shop' component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
