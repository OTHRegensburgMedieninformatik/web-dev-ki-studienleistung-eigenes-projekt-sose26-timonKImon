const logger = require("../utils/logger.js")
const dataStore = require("./dataStore.js");
const dataStoreClient = dataStore.getdataStore();

const eventmanager = {
    
    async addEvent(newEvent) {
        const query = 'INSERT into events (NAME, DATUM) VALUES ($1, $2)';
        const values = [newEvent.name, newEvent.datum];
        try {
            await dataStoreClient.query(query, values);
            logger.info("Added :", newEvent.name);
        }
        catch (e) {
            logger.error("ERROR: couldnt add Event.", e);
        }
    },

    async deleteEvent(name) {
        const query = 'DELETE FROM events WHERE name = $1';
        const values = [name];
        try {
            await dataStoreClient.query(query, values);
            logger.info("Deleting :", name);
        }
        catch (e) {
            logger.error("ERROR: couldnt delete event.", e);
        }
    },

    async getallevents() {
        const query = "SELECT NAME, TO_CHAR(datum, 'DD.MM.YYYY') AS DATUM from events";
        try {
            const result = await dataStoreClient.query(query);
            logger.info("Getting all events.");
            return result.rows;
        }
        catch (e) {
            logger.error("ERROR: couldnt get all events", e);
        }
    },
}

module.exports = eventmanager;