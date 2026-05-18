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

    async getwholemenu() {
        const query = 'SELECT menu.name as category, menuitems.name as item, menuitems.preis as preis, menuitems.inhalt as inhalt FROM menuitems JOIN menu ON menuitems.kategorie = menu.name ORDER BY menu.name';
        try {
            let result = await dataStoreClient.query(query);
            return result.rows;
        }
        catch (e) {
            logger.error("ERROR: couldnt get whole menu.")
        }
    },

    async sortedMenu() {
        const sortedMenu = {};
        const Menu = await this.getwholemenu();

        for (const item of Menu) {
            if (!sortedMenu[item.category]) { //new category 
                sortedMenu[item.category] = {
                    name: item.category,
                    item: []
                };
            }
            sortedMenu[item.category].item.push({
                item: item.item,
                preis: item.preis,
                inhalt: item.inhalt
            });
        }
        return Object.values(sortedMenu);
    }

};

module.exports = menulist;