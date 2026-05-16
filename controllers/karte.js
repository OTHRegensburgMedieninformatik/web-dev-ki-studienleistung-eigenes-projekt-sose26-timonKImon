const logger = require("../utils/logger.js")

const karte = {
    index(reqest,response) {
        logger.info("Karte rendering");
        const viewData = {
            title: "Karte"
        };
        response.render("karte", viewData);
    },
};

module.exports = karte;