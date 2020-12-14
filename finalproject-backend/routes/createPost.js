const express = require("express");
const router = express.Router();

const firebase = require("firebase");
const db = firebase.firestore();
const posts = db.collection("posts");

const form = `
  <form action="/create/submit">
    <input type="text" name="title" placeholder="Title of Post" />
    <input type="text" name"text" placeholder="Text of Post" />
    <input type="text" name="author" placeholder="Author" />
    <input type="text" name="email" placeholder="Email" />
    <button type="submit"> Submit Post</button>
  </form>
`;

router.get("/", (req, res) => {
  const queryParams = req.query;

  recipes
    .doc()
    .set(queryParams)
    .then(function (doc) {
      res.send("success");
    })
    .catch(function (e) {
      console.log("ERROR", e);
      res.send([{ ERROR_SUBMITTING: e.toString() }]);
    });

  res.send("");
});

module.exports = router;
