const express = require("express");
const router = express.Router();

const firebase = require("firebase");
const db = firebase.firestore();
const posts = db.collection("posts");

router.get("/", (req, res) => res.send("No Id Provided"));

router.get("/:id", (req, res) => {
  const queryId = req.params.id;
  posts
    .doc(queryId)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        const data = doc.data();
        return res.send(data);
      } else {
        return res.send("No information exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
