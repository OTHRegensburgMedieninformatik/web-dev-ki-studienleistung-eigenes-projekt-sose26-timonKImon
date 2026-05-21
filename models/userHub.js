const dataStore = require("./dataStore.js");
const dataStoreClient = dataStore.getdataStore();
const logger = require("../utils/logger.js");

const userHub = {
    async addUser (newUser) {
        const query = 'INSERT INTO frusers (username, email, passwort) VALUES ($1, $2, $3)';
        const values = [newUser.username, newUser.email, newUser.passwort];

        try {
            await dataStoreClient.query(query, values);
        }
        catch (e) {
            logger.error('ERROR: Couldnt add new user.', e);
        }
    },
    
    async authenticateUser (username, passwort) {
        const query = 'SELECT * FROM frusers WHERE username = $1 and passwort = $2';
        const values = [username, passwort];
        try {
            let DBuser = await dataStoreClient.query(query, values);
            console.log(DBuser);
            if (DBuser.rows[0] !== undefined) {     //wenn nicht vorhanden = undefinded
                return {id: username};
                }
            else {
                return undefined;
            }
        }
        catch (e) {
            logger.error("ERROR: Couldnt authenticate User.", e);
        }
    }
}

module.exports = userHub;