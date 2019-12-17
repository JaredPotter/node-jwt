const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
var secretKey = fs.readFileSync('secret256.key');

const app = express();

app.post('/login', (req, res) => {
    // Verify Login Credentials.

    // If Valid, sign token
    jwt.sign({ username: 'jaredpotter' }, secretKey, (err, token) => {
        if(err) {
            res.status(400);
            res.send(err);
            return;
        }

        res.status(200);
        res.send(token);
    });
});

app.get('/privateStuff', (req, res) => {
    const authorization = req.headers.authorization;
    let token = '';

    if (authorization && authorization.split(' ')[0] === 'Bearer') {
        token = authorization.split(' ')[1];
    }

    jwt.verify(token, secretKey, function(err, decoded) {
        if(err) {
            res.status(400);
            res.send('Token Not Valid');
            return;
        }

        // Retrieve data from db, and return it.
        const data = { privateStuff: '🦄' }
        res.send(data);
      });
});

app.listen(3000, () => {
    console.log('JWT Server Started!');
});