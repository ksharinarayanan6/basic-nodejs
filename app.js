const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');      

const app = express(); 

mongoose.connect("mongodb://localhost:27017/data", {useNewUrlParser: true, useCreateIndex: true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));

const leaderRoutes = require('./routes/addData');
const connection = mongoose.connection;

app.set('view engine', 'ejs');

connection.once('open', () => {
	console.log("Mongo DB database connection established");
});

app.use(leaderRoutes);
//body parser only handle text not binary value like files

app.listen(3001);
console.log('connected');
