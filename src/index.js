const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;
const route = require('./routes');
const db = require('./config/db ');

db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//init routes
route(app);

app.listen(port, () => console.log(`Example listring ${port}`));
