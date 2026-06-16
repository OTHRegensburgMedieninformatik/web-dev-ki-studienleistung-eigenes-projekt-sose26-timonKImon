const logger = require("../utils/logger.js");
const resAnfragen = require("../models/resAnfragen.js");

const reservieren = {
    index(request, response) {
        logger.info("events rendering");
        const viewData = {
            title: "Reservierung"
        };
        response.render("reservieren", viewData)
    },
    
    async reservierung(request, response) {
        const newRes = {
            name: request.body.name,
            email: request.body.email,
            anzpers: request.body.anzpers,
            datum: request.body.datum,
            uhrzeit: request.body.uhrzeit
        };
    logger.debug("New Reservation :", newRes)
    await resAnfragen.addRes(newRes);
    response.json({ success: true });
    },

    async accRes (request, response) {
        const id  = request.params.id;
        await resAnfragen.acceptRes(id);
        response.redirect("/edit")
    },
};



module.exports = reservieren;