const express = require("express");
const router = express.Router();

// index.js  IS THE BACKEND THAT SERVES THE DATA
// DATA IS SERVED TO THE BACKEND USING Express
// go to localhost:4000 to see 'sampleHikingJSON'

const sampleHikingJSON = [
  {
    name: "Chris",
    role: "student",
    dog: "artemis",
  },
  {
    name: "trail",
    role: "number of miles",
    dog: "hello",
    // trail: "trail name",
    // miles: "number of miles",
    // difficulty: "trail difficulty",
  },
];

router.get("/", (req, res) => res.send(sampleHikingJSON));
// Inside of this arrow function, we can do anything we along as somethign is returned at the end

module.exports = router;
