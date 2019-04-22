var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/login', function(req, res, next) {
//   res.render('user', { title: 'Users' });
// });
var checklogin = require('../config/login.js');

router.post('/', function(req, res, next){
  let email = req.body.email;
  let password = req.body.password;
  checklogin.auth(email, password);

  
});


module.exports = router;
