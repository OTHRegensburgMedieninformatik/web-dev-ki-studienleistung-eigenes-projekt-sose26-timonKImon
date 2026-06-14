const logger = require("../utils/logger.js");
const menuItems = require("../models/menuItems.js");
//const { reservierung } = require("./reservieren.js");
const resAnfragen = require("../models/resAnfragen.js");
const eventmanager = require("../models/eventManager.js");

const edit = {
  async index(request, response) {
    logger.info("edit rendering");
    const reservierung = await resAnfragen.getreservierungen();
    const viewData = {
      title: "Edit Web app template",
      reservierungen: reservierung,
    };
    response.render("edit", viewData);
  },

  async addItem(request, response) {
    const newItem = {
      name: request.body.name,
      inhalt: request.body.inhalt,
      preis: request.body.preis,
      kategorie: request.body.kategorie
    };
    logger.debug("New Item :", newItem)
    await menuItems.addItem(newItem);
    response.redirect("/edit");
  },

  async deleteItem(request, response) {
    const delItem = request.body.delID;
    logger.debug("Deleted :", delItem);
    await menuItems.deleteItem(delItem);
    response.redirect("/edit");
  },

  async addEvent(request, response) {
    const newEvent = {
      name: request.body.name,
      datum: request.body.datum
    };
    logger.debug("New Event :", newEvent)
    await eventmanager.addEvent(newEvent);
    response.redirect("/edit");
  },

  async deleteEvent(request, response) {
    const delEvent = request.body.delEvent;
    logger.debug("Deleted :", delEvent);
    await eventmanager.deleteEvent(delEvent);
    response.redirect("/edit");
  },

};

module.exports = edit;
