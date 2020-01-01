import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyClwwc-nqotETajTbNRBq4xZMjTykYckbY",
    authDomain: "photofeed-3b8d5.firebaseapp.com",
    databaseURL: "https://photofeed-3b8d5.firebaseio.com",
    projectId: "photofeed-3b8d5",
    storageBucket: "photofeed-3b8d5.appspot.com",
    messagingSenderId: "788217188443",
    appId: "1:788217188443:web:34bf223a7a95d30335af7e",
    measurementId: "G-1L78EJHSVL"
};
  // Initialize Firebase
firebase.initializeApp(config);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
  