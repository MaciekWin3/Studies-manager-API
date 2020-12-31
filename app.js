const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const dbURI = "mongodb+srv://maciek:<password>@studies-manager-api.qmnl3.mongodb.net/<dbname>?retryWrites=true&w=majority";

//db connection
mongoose.connect(
    "mongodb+srv://maciek:"+ process.env.hasloAtlasa +"@studies-manager-api.qmnl3.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => {
            console.log('Connected to db. Starting app...');
            app.listen(3000);
            console.log('App is ready to use')
        })
        .catch((err) => console.log('Error, when connecting to DB!'));

app.get

app.get('/', (req, res, next) => {

    res.status(200).json({
        'message': 'it works!',
    })
})