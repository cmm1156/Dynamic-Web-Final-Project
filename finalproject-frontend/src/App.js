import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

// Styles
import "./App.css";

// Notice how the App.js is importing ONLY the Containers
// the Containers are importing the Components
// Pages (containers)
import Home from "./containers/Home";
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import CreatePost from "./containers/CreatePost";
import UserProfile from "./containers/UserProfile";
import FullPost from "./containers/FullPost";

// Components
import Header from "./components/Header";

//  THIS COMBINES EXERCISES ONE, TWO, THREE, AND FOUR
//  COPY App.js from Exercise-Five

// My Firebase Configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "final-project-25657.firebaseapp.com",
  databaseURL: "https://final-project-25657-default-rtdb.firebaseio.com",
  projectId: "final-project-25657",
  storageBucket: "final-project-25657.appspot.com",
  messagingSenderId: "836470554574",
  appId: "1:836470554574:web:a79dca759c75194f9bf59f",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(true); // set to logged out by default
  const [loading, setLoading] = useState(true); // set loading default to false; // the laoding state prevents the flickering on page changes
  // when loading is true, the function returns null, therefore doesn't show loading
  const [userAuthInfo, setUserAuthInfo] = useState({}); // by default user info is empty, so no user info shows

  // The useEffect checks all the apps in the firebase config and if teh package is not there or initialized,
  // firebase is initialized
  useEffect(() => {
    if (!firebase.apps.length) {
      // Initializes Firebase
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]); // dependency array is firebaseConfig, everytime the config changes, this use effect will run

  // This use effect runs once because the dependency array is empty
  // this useEffect is used to update the data shown on the UserProfile page
  useEffect(() => {
    // .onAuthStateChanged(callback) Adds an observer for changes to the user's sign-in state
    firebase.auth().onAuthStateChanged(function (user) {
      // console.log({ user });
      if (user) {
        // User is logged in
        console.log(user);
        setUserAuthInfo(user); // user is type object // is an filled object {}
        setLoggedIn(true);
      } else {
        setUserAuthInfo({});
        setLoggedIn(false); // if no user info, logged out
      }
      setLoading(false); // loading flickering will not show
    });
  }, []);

  function LoginFunction(e) {
    // this function is imported by LoginForm.js component which is pushed down to Login.js Container
    // 'e' stands for 'event'
    // This is what you will run when you want to log in
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

    /**
     * firebase.signInWithEmailAndPassword( email:string, password:string) : Promise < UserCredentials >
     * Asynchronously signs in using an email and password.
    Fails with an error if the email address and password do not match.
    Note: The user's password is NOT the password used to access the user's email account. The email address serves as a unique identifier for the user, and the password is used to access the user's account in your Firebase project.
     */
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.warn("LOGIN ERROR", error);
      });
  }

  //Function for logging out
  function LogoutFunction() {
    // .signOut() : Promise < void >
    //Signs out the current user.
    // Returns Promise<void>

    // Function to run when you want to log out...
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
        setUserAuthInfo({}); // If user logs out, I want to clear the user information with the empty {} object
      })
      .catch(function (error) {
        console.warn("LOGOUT ERROR", error);
      });
  }

  // Function for creating an account
  // this is basically the same as LoginFunction, but it uses the .createUserWithEmailAndPassword(arg1,arg2) method instead of .signIn...() method
  // SEE Firebase documentation for the login and create account methods
  function CreateAccountFunction(e) {
    // what will run when you create an account...
    e.preventDefault();
    const email = e.currentTarget.createEmail.value; // .createEmail is the name of the input, SEE CreateAccountForm htmlFor='createEmail'
    const password = e.currentTarget.createPassword.value; // SEE CreateAccountForm name='createPassword'
    // password variable will take data from the input that I set 'createPassword' with name='createPassword'

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.warn("ACCOUNT CREATION FAILED", error);
      });
  }

  /**
   *
 

   */

  // COMPONENTS are like an image or div on a page
  // CONTAINERS are the pages themselves
  // this entire codebase uses small chunks of code (components / containers) to be clear and concise

  if (loading) return null;

  // UNLIKE Express, Routes can be create here
  return (
    <div className="App">
      <Header
        LogoutFunction={LogoutFunction}
        isLoggedIn={loggedIn}
        userAuthInfo={userAuthInfo}
      />
      <Router>
        <Route exact path="/login">
          {/* If someone is logged in, do not take them to login page - take them to User Profile
          this is an if/else statement. If not logged in, the login container will show on the page,
          if already logged in, the website will redirect the user to the main page */}
          {!loggedIn ? (
            <Login LoginFunction={LoginFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/create-account">
          {/* If someone is logged in, do not take them to create account page - take them to User Profile */}
          {!loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/create-post">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <CreatePost userAuthInfo={userAuthInfo} />
          )}
        </Route>
        <Route exact path="/profile/:id">
          {!loggedIn ? <Redirect to="/login" /> : <UserProfile />}
        </Route>

        <Route exact path="/full-post/:id">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <FullPost userAuthInfo={userAuthInfo} />
          )}
        </Route>

        <Route exact path="/">
          {/* if someone is not logged in, do not take them to User Profile page - take them to Login Page */}
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <Home userAuthInfo={userAuthInfo} />
          )}
        </Route>
      </Router>
    </div>
  );
}

export default App;
