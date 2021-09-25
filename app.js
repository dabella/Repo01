const express = require('express');
const app = express();
const path = require('path');
const puerto = process.env.PORT || 8080;
app.use(express.static('./public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
}); 


app.listen(puerto, () => console.log ('servidor en puerto 8080'));