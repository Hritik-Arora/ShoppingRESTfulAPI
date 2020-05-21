const express = require('express');

const app = express();

app.use((req, res, next) =>{
    res.status(200).json({
        message: 'It works'
    });
});

//Every request will pass through app.use() and the function we passed to it.

module.exports = app;