import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';
import './App.css';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = createUserProfileDocument(userAuth);
				(await userRef).onSnapshot((snap) => {
					this.props.setCurrentUserAction({
						id: snap.id,
						...snap.data(),
					});
				});
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					{/* <Route path='/hats' component={HatsPage} /> */}
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/signin' render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />)} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUserAction: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
