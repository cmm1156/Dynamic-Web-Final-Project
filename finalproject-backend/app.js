// Backend Application for Final Project
// SEE Exercise-four
const express = require("express"); // this is the expess package
const app = express(); // this is the function for express, see Docs
const port = process.env.PORT || 4000;

const indexRoute = require("./routes/index.js");
// ### Add Firebase here like in Exercise-Four

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// ### Add more routes here for getting and submitting... like exercise 4
app.use("/", indexRoute);

app.listen(port, () => console.log(`Backend is running at port:${port}`));

// SEE THE COMMENTS LABELED
// ###
// THESE ARE WHAT WILL MAKE THIS CODEBASE A COMPLETE APP
