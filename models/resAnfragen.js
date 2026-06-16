const logger = require("../utils/logger.js")
const dataStore = require("./dataStore.js");
const dataStoreClient = dataStore.getdataStore();

const resAnfragen = {
    
    async addRes(newRes) {
        const query = 'INSERT into reservierung (NAME, EMAIL, ANZPERS, DATUM, UHRZEIT) VALUES ($1, $2, $3, $4, $5)';
        const values = [newRes.name, newRes.email, newRes.anzpers, newRes.datum, newRes.uhrzeit];
        try {
            await dataStoreClient.query(query, values);
            logger.info("New Reservation added");
        }
        catch (e) {
            logger.error("ERROR: couldnt add reservation.", e);
        }
    },

    async acceptRes(id) {
        const query = "UPDATE reservierung SET status = 'angenommen' WHERE id = $1";
        const values = [id];
        try {
            await dataStoreClient.query(query, values);
            logger.info("Accepting Reservation: ", id);
        }
        catch (e) {
            logger.error("ERROR: couldnt accept reservation.", e);
        }
    },

    async getreservierungen() {
        const query = "SELECT id, name, email, anzpers, TO_CHAR(datum, 'DD.MM.YYYY') AS datum, TO_CHAR(uhrzeit, 'HH24.MI') AS uhrzeit, status from reservierung ORDER BY CASE status WHEN 'offen' THEN 1, WHEN 'angenommen' THEN 2, ELSE 3 END, datum ASC";
        try {
            const result = await dataStoreClient.query(query);
            logger.info("Getting reservierungen");
            return result.rows;
        }
        catch (e) {
            logger.error("ERROR: couldnt get all reservierungen.", e);
        }
    },
}

module.exports = resAnfragen;