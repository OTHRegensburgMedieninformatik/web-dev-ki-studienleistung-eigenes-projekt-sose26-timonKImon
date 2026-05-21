const dataStore = require("./models/dataStore.js");
const dataStoreClient = dataStore.getdataStore();
const logger = require("../utils/logger.js");

const userHub = {
    async addUser (newUser) {
        const query = 'INSERT INTO frusers (username, passwort, email) VALUES ($1, $2, $3)';
        const values = [newUser.username, newUser.passwort, newUser.email];

        try {
            await dataStoreClient.query(query, values);
        }
        catch (e) {
            logger.error('ERROR: Couldnt add new user.');
        }
    },
    
}