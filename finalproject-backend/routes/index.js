// THIS FILE IS WRITTEN IN NODE.JS

// const { query } = require("express");
const express = require("express");
const router = express.Router(); //   THIS LINE !!!

const firebase = require("firebase");
const db = firebase.firestore();
const posts = db.collection("posts"); // this is referencing the collection made in Firestore GUI titled 'recipes'

// index.js  is a backedn route that serves data contained at the base "/" of the API
// in index.js, two branches have been created:
// 1. "/all-recipes" -- this contains all the posts
// 2. "/recipes/:id" -- this contains all the posts from a specific user

// DATA IS SERVED TO THE BACKEND USING Express
// go to localhost:4000 to see 'sampleHikingJSON'

router.get("/posts/:id", (req, res) => {
  const postsArray = [];

  // Get ID
  const queryId = req.params.id;
  // Figure out how to refine our search to the recipeAuthorId

  posts
    .where("postAuthorId", "==", queryId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        postsArray.push(doc.data());
      });
      return res.send(postsArray);
    })
    .catch(function (error) {
      console.warn("Error:", error);
      return res.send(error);
    });
});

router.get("/all-posts", (req, res) => {
  const postsArray = [];

  posts
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        postsArray.push(doc.data());
      });
      return res.send(postsArray);
    })
    .catch(function (error) {
      console.warn("Error:", error);
      return res.send(error);
    });
});

// Sends the HTTP response.
// The body parameter can be a Buffer object, a String, an object, Boolean, or an Array. For example:
module.exports = router;
