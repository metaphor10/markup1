var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var imagesForShow= ['bread',
						'caviar',
						'cookies',
						'corn-flakes',
						'croissant',
						'jam',
						'knife',
						'martini',
						'notebook',
						'oranges',
						'stir-fry'
		]
  res.render('digskills-603/jq-fancybox/index', { title: 'fancy box', imagesToGo: imagesForShow });
});


module.exports = router;