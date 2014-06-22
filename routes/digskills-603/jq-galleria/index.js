var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var imagesForShow= [['bread', 'bread for the masses'],
						['caviar', 'Caviar on a scallop appetizer'],
						['cookies','A closeup photograph of poppy-seed bread rolls'],
						['corn-flakes','some corn flakes'],
						['croissant','A nice crossiant'],
						['jam',' Yummy jam'],
						['knife', 'desginer knife'],
						['martini','relaxing martini'],
						['notebook', 'notebook for a friend'],
						['oranges','juciy oranges'],
						['stir-fry','Great Stir Fry']
		];
	var videosToPlay=[['http://www.youtube.com/watch?v=gR0UmMAhMCw','jill-andrews-thumb.jpg','Jill Andrews', 'Jill Andrews - Worth Keeping video'],['http://vimeo.com/19429666','federer-thumb.jpg','Roger Federer', 'Roger Federer at the 2011 Australian Open']];
  res.render('digskills-603/jq-galleria/index', { title: 'galleria', imagesToGo: imagesForShow, videos1: videosToPlay });
});


module.exports = router;