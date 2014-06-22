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
		]
  res.render('digskills-603/jq-fancybox/index', { title: 'fancy box', imagesToGo: imagesForShow });
});


module.exports = router;