// THIS FILE IS WRITTEN IN NODE.JS

// const { query } = require("express");
const express = require("express");
const router = express.Router(); //   THIS LINE !!!

const firebase = require("firebase");
const db = firebase.firestore();
const posts = db.collection("posts"); // this is referencing the collection made in Firestore GUI titled 'recipes'

const reports = db.collection("reports");

// index.js  is a backedn route that serves data contained at the base "/" of the API
// in index.js, two branches have been created:
// 1. "/all-recipes" -- this contains all the posts
// 2. "/recipes/:id" -- this contains all the posts from a specific user

// DATA IS SERVED TO THE BACKEND USING Express
// go to localhost:4000 to see 'sampleHikingJSON'

// SERVES ALL POSTS BY A CERTAIN USER
// DETERMINED BY :id WHICH IS THE USER'S UID
router.get("/posts/:id", (req, res) => {
  const postsArray = [];

  // Get ID
  const queryId = req.params.id;
  // Figure out how to refine our search to the postAuthorId

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

// router.get("/posts/:id/postName", (req, res) => {
//   const postsArray = [];

//   // Get ID
//   const queryId = req.params.id;
//   // Figure out how to refine our search to the postAuthorId

//   posts
//     .where("postName", "==", queryId)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         postsArray.push(doc.data());
//       });
//       return res.send(postsArray);
//     })
//     .catch(function (error) {
//       console.warn("Error:", error);
//       return res.send(error);
//     });
// });

// SERVES IDS and DATA FOR ALL DOCUMENTS in the 'posts' db
// router.get("/all-posts", (req, res) => {
//   const postsArray = [];

//   posts
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         // let postObject = {};
//         let docId = doc.id;
//         let docData = doc.data();
//         docData.postId = docId;
//         let newPostObject = docData;

//         postsArray.push(newPostObject);
//       });
//       return res.send(postsArray);
//     })
//     .catch(function (error) {
//       console.warn("Error:", error);
//       return res.send(error);
//     });
// });

// SERVE A SINGLE POST WITH A UNIQUE ID
// router.get("/all-posts/:id", (req, res) => {
//   const postsArray = [];

//   // Get ID
//   const queryId = req.params.id;
//   // Figure out how to refine our search to the postAuthorId

//   posts
//     .where("postId", "==", queryId)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         postsArray.push(doc.data());
//       });
//       return res.send(postsArray);
//     })

//     .catch(function (error) {
//       console.warn("Error:", error);
//       return res.send(error);
//     });
// });

// SERVES THE DOCUMENT ID FOR ALL DOCUMENTS
// router.get("/all-posts/ids", (req, res) => {
//   const docIdsArray = [];

//   posts
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         docIdsArray.push(doc.id);
//       });
//       return res.send(docIdsArray);
//     })
//     .catch(function (error) {
//       console.warn("Error:", error);
//       return res.send(error);
//     });
// });

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

router.get("/reports", (req, res) => {
  const reportsArray = [];

  reports
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        reportsArray.push(doc.data());
      });
      return res.send(reportsArray);
    })
    .catch(function (error) {
      console.warn("Error:", error);
      return res.send(error);
    });
});

// SERVE THE DATA FROM A SINGLE DOCUMENT
// router.get("/all-posts/:id", (req, res) => {
//   const thePost = [];

//   const queryId = req.params.id;

//   posts
//     .where("posts.id", "==", queryId)
//     .get()
//     .then(function (doc) {
//       thePost.push(doc.data;
//       return res.send(thePost);
//     })
//     .catch(function (error) {
//       console.warn("Error:", error);
//       return res.send(error);
//     });
// });

// Sends the HTTP response.
// The body parameter can be a Buffer object, a String, an object, Boolean, or an Array. For example:
module.exports = router;
