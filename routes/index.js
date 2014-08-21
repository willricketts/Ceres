var express = require('express');
var partials = require('express-partials');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Ceres' });
});

module.exports = router;
