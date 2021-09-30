'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8042;

app.get('/', (req, res) => {

    fs.readFile('app.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });

});

app.get('/stylesheet.css', (req, res) => {

    fs.readFile('stylesheet.css', (err, data) => {
        res.send(data);
    });

});

app.get('/worksofc.jpg', (req, res) => {

    fs.readFile('worksofc.jpg', (err, data) => {
        res.send(data);
    });

});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});