const { error } = require('console');
var express = require('express');
const session = require('express-session');
var router = express.Router();
var fs = require("fs");
const { Session } = require('inspector');
var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"motorlux"
});

router.get('/',function(request,res,next){
    res.render('ForgetPass',{ message:request.flash('success')});
});

router.post('/updatepwd',function(request,res,next){
    var email=request.body.email;
    var pwd=request.body.pwd; 
    var con_pwd=request.body.con_pwd;
    if(email && pwd && con_pwd)
    {
        var str="select * from registration where Email='"+email+"'";
        //console.log(str);
        con.query(str,function(error,data)
        {
            if(data.length>0)
                {
                      
                    if(pwd === con_pwd)
                    {   
                        var str="update registration set Password='"+pwd+"' where Email='"+email+"'";
                        //console.log(str);
                        con.query(str,function(err,data){
                            if (err) throw error;
                            if(data.length>0)
                            {
                                res.redirect('/ForgetPass');
                            }
                            
                        });
                    }
                    else
                    {
                       
                        request.flash('success', 'Incorrect Password or Confirm Password!');
                        res.render('ForgetPass', { message:request.flash('success')});
                        // res.send('Incorrect Password or Confirm Password!');
                    }
                }
                else
                {
                    request.flash('success', 'Email not exist!');
                    res.render('ForgetPass', { message:request.flash('success')});
                    // res.send("Email not exist");  
                }
        });  
    }
    else
    {
        // res.send('Please enter Email,New Password and Confirm Password!');
        request.flash('success', 'Please enter Email,New Password and Confirm Password!');
        res.render('ForgetPass', { message:request.flash('success')});
    }
});
module.exports=router;