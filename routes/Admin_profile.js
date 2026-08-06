var express = require('express');
var router = express.Router();
var fs = require("fs");
var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"motorlux"
});

router.get('/',function(request,res,next){
    var str="select * from admin where Id=1";
    //console.log(str);
    con.query(str,function(error,result)
    {
       if(error) throw error;
       if(result.length>0)
        {
            //console.log(result);
            request.session.userName = result[0].Name;
            request.session.email = result[0].Email;
            request.session.Phoneno = result[0].Phone_no;
            request.session.Password = result[0].Password;
            

            const username= request.session.userName;
            const email= request.session.email;
            const Phone_no= request.session.Phoneno;
            const Password= request.session.Password;
            

            res.render('Admin_profile',{Users:username,Emails:email,Phone_nos:Phone_no,Passwords:Password,data:result});
            
        }     
    });
});

router.post('/update_pro',function(request,res,next){
    var user_name=request.body.user_name;
    var email=request.body.email;
    var ph_no=request.body.ph_no;
    var pwd=request.body.pwd;
    

    var str="update admin set Name='"+user_name+"',Email='"+email+"',Phone_no='"+ph_no+"',Password='"+pwd+"' where Id=1";
    //console.log(str);
    con.query(str,function(error,result){
        if(error) throw error;
        if(result.length>0)
        {
           res.render('Admin_profile');
        }
    });
});
module.exports=router;
