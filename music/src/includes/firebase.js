import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD88kfsRMC5YtKMgBQD7Cw9GhUOiTSjfqA",
    authDomain: "vue-http-demo-9ae9e.firebaseapp.com",
    databaseURL: "https://vue-http-demo-9ae9e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vue-http-demo-9ae9e",
    storageBucket: "vue-http-demo-9ae9e.appspot.com",
    messagingSenderId: "41692009132",
    appId: "1:41692009132:web:9406851fb7ac8e20240509"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');
export {
    auth,
    db,
    usersCollection,
}