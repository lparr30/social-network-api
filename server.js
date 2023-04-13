const express = require('express');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

db.once('open', () => {
    console.log('db connection open');
    app.listen(PORT, () => {
        console.log(`Server listening to port ${PORT}`);
    })
})