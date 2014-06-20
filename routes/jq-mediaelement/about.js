var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('jq-mediaelement/index', { title: 'media element' });
});
router.get('/video', function(req, res) {
  res.render('jq-mediaelement/video2', { title: 'video js' });
});

module.exports = router;
