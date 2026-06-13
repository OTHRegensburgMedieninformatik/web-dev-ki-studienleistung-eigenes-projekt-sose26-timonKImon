const logger = require("../utils/logger.js");
const menuItems = require("../models/menuItems.js");
//const { reservierung } = require("./reservieren.js");
const resAnfragen = require("../models/resAnfragen.js");

const edit = {
  async index(request, response) {
    logger.info("edit rendering");
    const reservierung = await resAnfragen.getreservierungen();
    console.log("in edit:", reservierung);
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
  }
};

module.exports = edit;
