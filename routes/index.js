var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Our home is here'
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'All about my art'
  });
});

router.get('/:search', function(req, res) {
  req.send('index', '<p>{ search }</p>' )
});


module.exports = router;
