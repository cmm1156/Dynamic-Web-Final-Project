const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
const db = firebase.firestore();
const reports = db.collection("reports");

router.get("/", (req, res) => {
  // gets information at base "/" of '/create-report/...'
  const queryParams = req.query;
  const idFromTitle = queryParams.reportTitle
    .replace(/\s+/g, "-")
    .toLowerCase();

  reports
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
