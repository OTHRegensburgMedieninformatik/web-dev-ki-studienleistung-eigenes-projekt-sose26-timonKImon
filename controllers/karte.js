const logger = require("../utils/logger.js")
const menulist = require("../models/menulist.js");

const karte = {
    async index(request,response) {
        logger.info("Karte rendering");
        const categories = await menulist.getallcategories();
        const items = await menulist.getallitems();
        const wholeMenu = await menulist.getwholemenu();
        const sortedMenu = await menulist.sortedMenu();
        const viewData = {
            title: "Karte",
            category: categories,
            item: items,
            wholeMenu: wholeMenu,
            sortedMenu: sortedMenu
        };
        response.render("karte", viewData);
    },
};

module.exports = karte;

