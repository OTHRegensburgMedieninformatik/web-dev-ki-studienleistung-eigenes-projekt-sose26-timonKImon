const express = require("express");
const logger = require("./utils/logger");
const handlebars = require("express-handlebars");
const PORT = process.env.PORT || 3000;

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

const routes = require("./routes");
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Web App template listening on ${PORT}`);
});

module.exports = app;
