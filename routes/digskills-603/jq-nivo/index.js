var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('digskills-603/jq-nivo/index', { title: 'media element' });
});


module.exports = router;