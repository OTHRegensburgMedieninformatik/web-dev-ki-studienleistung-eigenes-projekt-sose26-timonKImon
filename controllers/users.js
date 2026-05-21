const logger = require("../utils/logger.js");

const users = {
    index (request, response) {
        logger.info("UserHub rendering.")
        const viewData = {
            title: "USERS"
        };
        response.render("userHub", viewData);
    },
}

module.exports = users;