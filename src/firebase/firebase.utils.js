import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyAj44jNre6j9czfooyRDFgkLrvcmsFPia8",
    authDomain: "crwn-db-4edb9.firebaseapp.com",
    databaseURL: "https://crwn-db-4edb9.firebaseio.com",
    projectId: "crwn-db-4edb9",
    storageBucket: "crwn-db-4edb9.appspot.com",
    messagingSenderId: "865818934809",
    appId: "1:865818934809:web:314d2e1e6bbeba32caf488",
    measurementId: "G-QHRTZ0K4XE"
};

firebase.initializeApp(config);


//auth
export const auth = firebase.auth();
//database
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    console.log(userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email, photoURL, phoneNumber } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                phoneNumber,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.error('error creating user', error.message);
        }

        
    }
    return userRef;
    console.log(snapShot);
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;