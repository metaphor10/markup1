var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('digskills-603/jq-backstretch/index', { title: 'back stretch' });
});


module.exports = router;