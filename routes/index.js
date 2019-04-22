var express = require('express');
var router = express.Router();
// app.use(session({ secret: 'secret', cookie: { maxAge: 60000 }}))
/* GET home page. */
router.get('/', function(req, res, next) {
  // if(req.session.user_email != null){
  //   return res.redirect('/dashboard');
  // }else{
    res.render('index', { title: 'Login' });
  // }
});

router.post('/', function(req, res, next){
  let email = req.body.email;
  let password = req.body.password;
  let sql = "SELECT * FROM user WHERE email = ?";

  db.query(sql, [email], (err, results) => {
    if (err) {
      // return res.status(500).send(err);
      fail_type = "danger";
      fail_message = "";
      res.render('index', {
        title: [results[0].email]
      });
    }else{
      if(results.length >0){
        if(results[0].password == password){
            req.session.user_id = results[0].id;
            req.session.user_email = results[0].email;
            return res.redirect('/dashboard');
        }
        else{
          fail_type = "danger";
          fail_message = "Invalid Username or Password";
          res.render('index', {
            fail_type,
            fail_message
          });
        }
      }
      else{
        fail_type = "danger";
        fail_message = "Email Does Not Exist";
        res.render('index', {
          fail_type,
          fail_message
        });
      }
    }
  });  
});

router.get('/user', function(req,res,next){
  res.render('user', {title: 'User'});
});
module.exports = router;
