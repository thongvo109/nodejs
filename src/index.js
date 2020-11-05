const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()
const path = require('path');
const port =3000

app.use(express.static(path.join(__dirname,'public')))
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources/views'));


app.get('/trang-chu', (req,res) => { res.render('home')})
app.get('/news', (req,res) => { res.render('news')})

app.listen(port,() => console.log(`Example listring ${port}`));