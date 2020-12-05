const express = require('express');
const app = express();

//Pages Import
const login = require('./login/login');
const register = require('./register/register');

app.listen(8000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('Server Started Successfully on 8000')
})

//Home Page
app.get('/', (req, res) => {
    res.send("HomePage");
})

//Pages
app.use('/login', login);
app.use('/register', register);

//api

