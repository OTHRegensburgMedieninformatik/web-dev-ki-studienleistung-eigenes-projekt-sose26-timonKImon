const logger = require("../utils/logger.js")
const dataStore = require("./dataStore.js");
const dataStoreClient = dataStore.getdataStore();

const eventmanager = {
    
    async addEvent(newEvent) {
        const query = 'INSERT into menuitems (NAME, INHALT, PREIS, KATEGORIE) VALUES ($1, $2, $3, $4)';
        const values = [newItem.name, newItem.inhalt, newItem.preis, newItem.kategorie];
        try {
            await dataStoreClient.query(query, values);
            logger.info("Added :", newItem.name);
        }
        catch (e) {
            logger.error("ERROR: couldnt add item.", e);
        }
    },

    async deleteEvent(name) {
        const query = 'DELETE FROM  WHERE name = $1';
        const values = [name];
        try {
            await dataStoreClient.query(query, values);
            logger.info("Deleting :", name);
        }
        catch (e) {
            logger.error("ERROR: couldnt delete item.", e);
        }
    },
}

module.exports = eventmanager;