var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('jq-mediaelement/index', { title: 'media element' });
});

module.exports = router;
