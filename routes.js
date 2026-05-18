const express = require("express");
const router = express.Router();

const home = require("./controllers/home.js");
const edit = require("./controllers/edit.js");
const events = require("./controllers/events.js");
const karte = require("./controllers/karte.js");

router.get("/", home.index);
router.get("/edit", edit.index);
router.get("/events", events.index)
router.get("/karte", karte.index);
router.post("/edit/add", edit.addItem);
router.post("/edit/delete", edit.deleteItem);

module.exports = router;
