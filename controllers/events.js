const logger = require("../utils/logger.js");

const events = {
    index(request, response) {
        logger.info("events rendering");
        const viewData = {
            title: "Aktuelle Events"
        };
        response.render("events", viewData)
    },
};

module.exports = events;