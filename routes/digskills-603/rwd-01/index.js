var express = require('express');
var router = express.Router();

var sendgrid  = require('sendgrid')('', '');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('digskills-603/rwd-01/index', { title: 'Home | Ariel Borochov' });
  console.log(req);
});

router.get('/about', function(req, res) {
  res.render('digskills-603/rwd-01/about', { title: 'about | Ariel Borochov' });
});
router.get('/contact', function(req, res) {
  res.render('digskills-603/rwd-01/contact', { title: 'contact | Ariel Borochov', myEmail: 'ariel.borochov@gmail.com' });

});
router.get('/portfolio', function(req, res) {
  res.render('digskills-603/rwd-01/portfolio', { title: 'portfolio | Ariel Borochov' });
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
  res.render('digskills-603/rwd-01/index', { title: 'Home | Ariel Borochov' });
});

  
});




module.exports = router;
