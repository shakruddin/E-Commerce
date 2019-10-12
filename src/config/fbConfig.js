import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyA0YSVBV7y1vcouX9oyAA5EcZLIof02QMA",
    authDomain: "e-commerce-4fca9.firebaseapp.com",
    databaseURL: "https://e-commerce-4fca9.firebaseio.com",
    projectId: "e-commerce-4fca9",
    storageBucket: "e-commerce-4fca9.appspot.com",
    messagingSenderId: "1046128948087",
};
firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore()

export {
    auth,
    db
}