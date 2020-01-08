import firebase from "@firebase/app";
import "@firebase/auth";

  var firebaseConfig = {
    apiKey: "AIzaSyBU3RCDy8IgWWwGLo90GQRXJYGucSsPZEs",
    authDomain: "fir-login-bd0b6.firebaseapp.com",
    databaseURL: "https://fir-login-bd0b6.firebaseio.com",
    projectId: "fir-login-bd0b6",
    storageBucket: "fir-login-bd0b6.appspot.com",
    messagingSenderId: "725519693647",
    appId: "1:725519693647:web:3248461647f60d95a2f73a"
  };

    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth(app);

export default auth;