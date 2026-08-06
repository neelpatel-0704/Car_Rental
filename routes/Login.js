const { error } = require('console');
var express = require('express');
var router = express.Router();
var fs = require("fs");
// var multer = require('multer');

var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"motorlux"
});

router.get('/',function(request,res,next){
    res.render('Login', { message:request.flash('success')});
    //request.flash('success', 'Sample Data Inserted');
});

//get login
router.post('/checklogin',function(request,response,next){
    
    var user_name=request.body.user_name;
    var pwd=request.body.pwd;
    if(user_name!="" && pwd!="")
    {
        var str="select * from registration where User_name='"+user_name+"' and Password='"+pwd+"'";
        console.log(str);
        con.query(str,function(err,data){
            if(err) throw error;
            if(data.length>0){
                console.log(data);
                 // Authenticate the user
                request.session.loggedin=true;
                console.log(data[0].Id);
                request.session.userId = data[0].Id;
                response.redirect('/Feed_back');
            }
            else 
            {
                var str="select * from admin where Name='"+user_name+"' and Password='"+pwd+"'";
                console.log(str);
                con.query(str,function(err,data2){
                    if(err) throw error;
                    if(data2.length>0)
                    {
                        // Authenticate the user
                        request.session.loggedin=true;
                        // Redirect to home page
                        response.redirect('/Admin'); 
                    }
                    else {
                        request.flash('success', 'Incorrect Username and Password!');
                        response.redirect('/Login'); 
                    }
                });
            }
        });
    }
    else {
        console.log("Else");
        request.flash('success', 'Please enter Username and Password!');
        response.render('Login', { message:request.flash('success')});
        response.redirect('/Login');
    }
});

module.exports=router;