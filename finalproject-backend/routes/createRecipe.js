const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
const db = firebase.firestore();
const recipes = db.collection("recipes");

router.get("/", (req, res) => {
  const queryParams = re.query;

  recipes
    .doc()
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
