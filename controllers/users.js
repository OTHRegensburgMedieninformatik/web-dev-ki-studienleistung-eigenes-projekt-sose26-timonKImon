const logger = require("../utils/logger.js");
const userHub = require("../models/userHub.js");

const users = {
    index (request, response) {
        logger.info("UserHub rendering.")
        const viewData = {
            title: "USERS"
        };
        response.render("userHub", viewData);
    },
    
    async authenticate (request, response) {
        let user = await userHub.authenticateUser(request.body.username, request.body.passwort);
        if (user) {
            request.session.user = user.id;
            logger.info("Authenticated successfully.");
            response.redirect("/");
        }
        else {
            response.redirect("/");
        }
    },

    logout (request, response) {
        request.session.destroy();
        response.redirect("/");
    },

    async register (request, response) {
        const newUser = request.body;
        await userHub.addUser(newUser);
        logger.info("Registering new User.");
        response.redirect("/");
    },

}

module.exports = users;