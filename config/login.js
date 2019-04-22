var express = require('express');

module.exports = {
    auth: function(email, password){
        res.send(email);
        res.send(req);
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
                    pass_type = "success";
                    pass_message = "login sucessfull";
                    res.render('dashboard', {
                    title: [req.session.user_email]
                    });
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
    }
}
