const express = require('express');
const db = require('./config/connection');

const apiRouter = require('./routes/api');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

db.once('open', () => {
    console.log('db connection open');
    app.listen(PORT, () => {
        console.log(`Server listening to port ${PORT}`);
    })
})