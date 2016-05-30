var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index.html');
});

router.get('/api', function(req, res, next) {
	res.render('api.html');
});

router.get('/counter', function(req, res, next) {
	res.render('counter.html');
});
module.exports = router;
