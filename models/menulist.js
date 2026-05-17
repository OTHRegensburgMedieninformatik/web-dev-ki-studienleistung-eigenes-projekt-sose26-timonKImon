const logger = require("../utils/logger.js")
const dataStore = require("./dataStore.js");
const dataStoreClient = dataStore.getdataStore();

const menulist = {
    async getallitems() {
        const query = 'SELECT * from menuitems';
        try {
            let result = await dataStoreClient.query(query);
            return result.rows;
        }
        catch (e) {
            logger.error("ERROR: couldnt get all items.")
        }
    },
    
    async getallcategories() {
        const query = 'SELECT * from menu';
        try {
            let result = await dataStoreClient.query(query);
            return result.rows;
        }
        catch (e) {
            logger.error("ERROR: couldnt get categories.")
        }
    },

};

module.exports = menulist;