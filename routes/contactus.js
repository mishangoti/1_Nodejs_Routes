var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us' });
});

// router.get('/user', function(req,res,next){
//   res.render('user', {title: 'User'});
// });
module.exports = router;