const express = require("express");
const logger = require("./utils/logger");
const handlebars = require("express-handlebars");
const app = express();
const dotenv = require("dotenv");
const session = require("express-session");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "process.env.TC",
    cookie: {
        maxAge: 3600000
    },
    resave: false,
    saveUninitialized: false
}));

app.use((request, response, next) => {
    response.locals.user = request.session.user;
    next()
});

app.engine('.hbs', handlebars.engine({extname: '.hbs',     
    helpers: {
        eq: (a, b) => a === b
    }}));
app.set('view engine', '.hbs');
app.set('views', './views');



const routes = require("./routes");
app.use("/", routes);

app.listen(process.env.PORT, () => {
    console.log(`Web App template listening on ${process.env.PORT}`);
});

module.exports = app;
