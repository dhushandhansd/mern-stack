const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../model/User');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/register.html'))
});

function register() {
    let user = new User({
        name: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    })
    user.save()
        .then(user => {
            res.json({
                message: "User Added Successfully"
            })
        }).catch(error => {
            res.json({
                message: "User Adding Failed"
            })
        })
}

module.exports = router;