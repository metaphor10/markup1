module.exports = function(data) {
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	
  res.render('digskills-603/jq-photo-gallery/index', { title: 'media element', imageData: data });
});

	return router;
}



