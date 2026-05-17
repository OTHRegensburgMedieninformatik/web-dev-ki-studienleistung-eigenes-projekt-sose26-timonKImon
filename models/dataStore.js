var pg = require("pg");
const logger = require("../utils/logger.js");

const conString = process.env.DB_CON_STRING;
const dbConfig = {
    connectionString: conString,
    ssl: {rejectUnauthorized: false}    //no certificate required for datatransfer
}

if (conString == undefined) {
    logger.error("ERROR: DB_CON_STRING not set.");
    process.exit(1);
}

let dbClient = null;
const dataStore= {
    getdataStore() {
        if (dbClient !== null) {
            return dbClient;
        } 
        else {
            dbClient = new pg.Client(dbConfig);
            dbClient.connect();
            return dbClient;
        }
    },
    async endConnection() {
        await dbClient.end();
    }
}

module.exports = dataStore;