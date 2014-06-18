var express = require('express');
var router = express.Router();

var sendgrid  = require('sendgrid')('metaphor', 'a1492sus');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home | Ariel Borochov' });
  console.log(req);
});

router.get('/digskills-603/rwd-01/', function(req, res) {
  res.render('index', { title: 'Home | Ariel Borochov' });
});
router.get('/digskills-603/rwd-01/about', function(req, res) {
  res.render('about', { title: 'about | Ariel Borochov' });
});
router.get('/digskills-603/rwd-01/contact', function(req, res) {
  res.render('contact', { title: 'contact | Ariel Borochov', myEmail: 'ariel.borochov@gmail.com' });

});
router.get('/digskills-603/rwd-01/portfolio', function(req, res) {
  res.render('portfolio', { title: 'portfolio | Ariel Borochov' });
});
router.post('/contactsubmit', function(req, res) {
		var payload   = {
  to      : 'ariel.borochov@gmail.com',
  from    : 'from@other.com',
  subject : 'Saying Hi',
  text    : 'This is my first email through SendGrid'
}

sendgrid.send(payload, function(err, json) {
  if (err) { console.error(err); }
  console.log(json);
});

  
});




module.exports = router;
