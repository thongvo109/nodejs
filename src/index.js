const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;
const route = require('./routes');
const db = require('./config/db ');
const methodOverride = require('method-override');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//init routes
route(app);

app.listen(port, () => console.log(`App listring ${port}`));
