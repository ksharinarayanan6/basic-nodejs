const path = require("path");
const express = require('express');
const router = express.Router();

const dataController = require('../controllers/addData');

router.post('/addData', dataController.addData );
router.get('/', function(req, res, next){
   res.render("home");
 });
router.get('/data', dataController.fetchData );

module.exports = router;
