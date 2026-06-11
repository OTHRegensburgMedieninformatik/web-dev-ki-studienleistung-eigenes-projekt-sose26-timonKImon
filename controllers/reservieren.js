const logger = require("../utils/logger.js");

const reservieren = {
    index(request, response) {
        logger.info("events rendering");
        const viewData = {
            title: "Reservierung"
        };
        response.render("reservieren", viewData)
    },
};

//reservieren.anfrage implementieren

module.exports = reservieren;