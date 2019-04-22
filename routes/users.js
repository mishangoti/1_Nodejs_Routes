var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', { title: 'Users' });
});

router.get('/login', function(req, res, next) {
  res.send('mishan');
});

module.exports = router;
