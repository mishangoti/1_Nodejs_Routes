var express = require('express');
var router = express.Router();
var session = require('express-session');
/* GET home page. */
router.get('/', function(req, res, next) {
  // if(req.session.user_email != null){
    res.render('dashboard', { title: 'Dashboard' });
  // }else{
  //   res.render('index');
  // }
});

// router.get('/user', function(req,res,next){
//   res.render('user', {title: 'User'});
// });
module.exports = router;
