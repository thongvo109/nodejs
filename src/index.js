const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()
const path = require('path');

const port =3000
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname, 'resources/views'));



app.get('/trang-chu', (req,res) => { res.render('home')})

app.listen(port,() => console.log(`Example listring ${port}`));