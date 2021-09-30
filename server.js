'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8042;
const fs = require('fs');
 

app.get('/', (req, res) => {
    fs.readFile('app.html', (err, data) => {
        
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', data.length);
        res.send(data);
        
    });
  
  })


app.get('/stylesheet.css', (req, res) => {
    fs.readFile('stylesheet.css', (err, data) => {
        res.setHeader('Content-Type', 'text/css');
        res.send(data);
        
    });
})
 

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })