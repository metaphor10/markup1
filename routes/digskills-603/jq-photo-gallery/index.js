
var express = require('express');
var data=require('../../../data/photos.js');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
	console.log(data.length);
	 
  res.render('digskills-603/jq-photo-gallery/index', { title: 'media element', appData: data });
});

	 module.exports =router;




