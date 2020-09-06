import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyDvUbJALEQcTWtpL9A3P3qWt4hoHhIkClI',
	authDomain: 'e-commerce-project-114d3.firebaseapp.com',
	databaseURL: 'https://e-commerce-project-114d3.firebaseio.com',
	projectId: 'e-commerce-project-114d3',
	storageBucket: 'e-commerce-project-114d3.appspot.com',
	messagingSenderId: '165396057647',
	appId: '1:165396057647:web:d8c441c2acab12675c00da',
	measurementId: 'G-T0CS5LC74D',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Using a popup.
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () =>
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function (result) {
			// This gives you a Google Access Token.
			const token = result.credential.accessToken;
			// The signed-in user info.
			const { user } = result;
			return {
				token,
				user,
			};
		});
export const createUserProfileDocument = async (userAuth, additionalData = {}) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const user = await userRef.get();
	if (!user.exists) {
		console.log('here creating');
		const { displayName, email } = userAuth;
		try {
			await userRef.set({
				displayName,
				email,
				created_dt: new Date(),
				...additionalData,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}
	return userRef;
};
export default firebase;
