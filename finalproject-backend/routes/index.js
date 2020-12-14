// THIS FILE IS WRITTEN IN NODE.JS

// const { query } = require("express");
const express = require("express");
const router = express.Router(); //   THIS LINE !!!

const firebase = require("firebase");
const db = firebase.firestore();
const recipes = db.collection("recipes");

// router.get("/recipes/:id", (req, res) => {
//   const recipesArray = [];
//   recipes
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         recipesArray.push(doc.data());
//       });
//       return res.send(recipesArray);
//     })
//     .catch(function (error) {
//       console.log("Error", error);
//       return res.send(error);
//     });
// });

// const firebase = require("firebase");
// const db = firebase.firestore();
// const posts = db.collection("posts");

// IS THIS LINE !!!
// router.get("/", (req, res) => {
//   const posts = [];

//   posts
//     .get()
//     .then((querySnapshot) => {
//       // loop through query snapshot and push into array (JSON)
//       querySnapshot.forEach((doc) => {
//         postsArrays.push(doc.data());
//       });
//       // return array
//       return res.send(postsArray);
//     })
//     .catch(function (e) {
//       console.warn("error", e);
//       return res.send(error);
//     });
// });

// index.js  IS THE BACKEND THAT SERVES THE DATA
// DATA IS SERVED TO THE BACKEND USING Express
// go to localhost:4000 to see 'sampleHikingJSON'

// const myJSON = [
//   {
//     trailName: "hiking trail",
//     trailLocation: "the location",
//     maxAlt: "altitude",
//   },
//   {
//     trailName: "name 2",
//     trailLocation: "location 2",
//     maxAlt: "alt 2",
//   },
// ];

// const sampleRecipeJSON = [
//   {
//     recipeId: "01",
//     recipeame: "Salad",
//     recipeAuthor: "Chris",
//     recipeAuthorId: "01",
//     ingredient: [
//       {
//         name: "lettuce",
//         amount: "2 cups",
//       },
//     ],
//     steps: [
//       {
//         stepNumber: 1,
//         stepInstruction: "Toss lettuce",
//       },
//     ],
//   },
// ];

// routes to index
// router.get("/", (req, res) => res.send(sampleRecipeJSON)); // this will get at the index route
// Inside of this arrow function, we can do anything we along as somethign is returned at the end

router.get("/all-recipes", (req, res) => {
  const recipesArray = [];
  recipes
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        recipesArray.push(doc.data());
      });
      return res.send(recipesArray);
    })
    .catch(function (error) {
      console.warn("Error:", error);
      return res.send(error);
    });
});

// Sends the HTTP response.
// The body parameter can be a Buffer object, a String, an object, Boolean, or an Array. For example:

module.exports = router;
