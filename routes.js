const express = require("express");
const router = express.Router();

const home = require("./controllers/home.js");
const about = require("./controllers/about.js");
const events = require("./controllers/events.js");
const karte = require("./controllers/karte.js");

router.get("/", home.index);
router.get("/about", about.index);
router.get("/events", events.index)
router.get("/karte", karte.index);

module.exports = router;
