const express = require('express')

const app = express()


const port =3000



app.get('/trang-chu', (req,res) => { res.send('Hello')})

app.listen(port,() => console.log(`Example listring ${port}`));