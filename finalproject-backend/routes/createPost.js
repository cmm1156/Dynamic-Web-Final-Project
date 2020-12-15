const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
const db = firebase.firestore();
const posts = db.collection("posts");
// const updatedPosts = db.collection("updatedPosts");

// router.get("/", (req, res) => res.send(form));

// router.get("/", (req, res) => {
//   const queryParams = req.query;
//   // const idFromTitle = queryParams.postName.replace(/\s+/g, "-").toLowerCase();

//   // const queryParams = req.query;

//   posts
//     .doc()
//     .set(queryParams)
//     .then(function (doc) {
//       res.send("success");
//     })
//     .catch(function (e) {
//       console.warn("ERROR", e);
//       res.send([{ ERROR_SUBMITTING: e.toString() }]);
//     });
// });

router.get("/", (req, res) => {
  const queryParams = req.query;
  const idFromTitle = queryParams.postName.replace(/\s+/g, "-").toLowerCase();

  // const queryParams = req.query;

  posts
    .doc(idFromTitle)
    .set(queryParams)
    .then(function (doc) {
      res.send("success");
    })
    .catch(function (e) {
      console.warn("ERROR", e);
      res.send([{ ERROR_SUBMITTING: e.toString() }]);
    });
});

module.exports = router;
