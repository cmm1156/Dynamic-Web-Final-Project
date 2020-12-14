// Backend Application for Final Project
// SEE Exercise-four

// THIS IS THE MOST IMPORTANT FUNCTION FOR THE SERVER
// THE routes ARE THE PAGES

// express() Creates an Express application. The express() function is a top-level function exported by the express module.
const express = require("express"); // this is the expess package
const app = express(); // this is the function for express, see Docs
const port = process.env.PORT || 4000;

// Require Firebase
const firebase = require("firebase");
// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBdoSE1QMJYJ7zxF-j_5DcOYUr0Fsy9NA8", //process.env.FIREBASE_APIKEY,
  authDomain: "final-project-25657.firebaseapp.com",
  databaseURL: "https://final-project-25657-default-rtdb.firebaseio.com",
  projectId: "final-project-25657",
  storageBucket: "final-project-25657.appspot.com",
  messagingSenderId: "836470554574",
  appId: "1:836470554574:web:a79dca759c75194f9bf59f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// DEFINE ROUTES to import
// finds the code in these files
const indexRoute = require("./routes/index.js");
const createRoute = require("./routes/createRoute.js");

// ### Add Firebase here like in Exercise-Four

// DO NOT CHANGE THIS, prevents CORS error
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// ### Add more routes here for getting and submitting... like exercise 4
// ENABLES ROUTES IN Express
app.use("/", indexRoute);
app.use("/create", createRoute); // with this url localhost:4000/post, the code in post.js will show and run

// app.listen() is an Express method
// USED TO SHOW THAT THE SERVER IS WORKING
app.listen(port, () =>
  console.log(`Final Project Backend is running at port:${port}`)
);

// SEE THE COMMENTS LABELED
// ###
// THESE ARE WHAT WILL MAKE THIS CODEBASE A COMPLETE APP
