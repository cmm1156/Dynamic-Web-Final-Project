const express = require("express");
const router = express.Router();

// index.js  IS THE BACKEND THAT SERVES THE DATA
// DATA IS SERVED TO THE BACKEND USING Express
// go to localhost:4000 to see 'sampleHikingJSON'

const hikingJSON = [
  {
    trailName: "",
    traillocation: "",
    maxAlt: "",
  },
];

router.get("/", (req, res) => res.send(hikingJSON));
// Inside of this arrow function, we can do anything we along as somethign is returned at the end

module.exports = router;
