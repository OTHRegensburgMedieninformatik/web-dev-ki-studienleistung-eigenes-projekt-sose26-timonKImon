const express = require("express");
const router = express.Router();
const auth = require("./utils/auth.js");

const home = require("./controllers/home.js");
const edit = require("./controllers/edit.js");
const events = require("./controllers/events.js");
const karte = require("./controllers/karte.js");
const users = require("./controllers/users.js");
const reservieren = require("./controllers/reservieren.js");

router.get("/", home.index);
router.get("/events", events.index)
router.get("/karte", karte.index);
router.get("/geheimeLoginseitederBar", users.index);
router.get("/reservieren", reservieren.index);
router.post("/reservieren/anfrage", reservieren.reservierung);
router.post("/reservierung/:id/annehmen", reservieren.accRes);
router.post("/userHub/111/authentication", users.authenticate);
router.post("/userHub/111/registrieren", users.register); //registrieren sicherheitslücke, nur login zulassen

// protected routes
router.get("/edit", auth.protected, edit.index);
router.post("/edit/add", auth.protected, edit.addItem);
router.post("/edit/delete", auth.protected, edit.deleteItem);
router.post("/logout", auth.protected, users.logout);

module.exports = router;
