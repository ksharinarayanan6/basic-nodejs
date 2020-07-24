const path = require("path");
const express = require('express');
const router = express.Router();

const dataController = require('../controllers/addData');

const fs = require("fs");

router.post('/addData', dataController.addData );
router.get('/', function(req, res, next){
  fs.readFile("./home.html", function(err, data){
    res.write(data);
    res.end();
  });
 });
 router.get('/display', function(req, res, next){
   fs.readFile('./display.html', function(err, data){
     res.write(data);
     res.end();
   });
 });
router.get('/data', dataController.fetchData );

module.exports = router;
 
