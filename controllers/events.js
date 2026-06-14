const logger = require("../utils/logger.js");
const eventmanager = require("../models/eventManager.js");

const events = {
    async index(request, response) {
        logger.info("events rendering");
        const events = await eventmanager.getallevents();
        const viewData = {
            title: "Aktuelle Events",
            allevents: events
        };
        response.render("events", viewData)
    },
};

module.exports = events;