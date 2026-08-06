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

// Middleware to parse URL-encoded data
// router.use(express.urlencoded({ extended: false }));


// // Error-handling middleware
// router.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });


router.get('/',function(request,res,next){
    const user_Id=request.session.userId;
    var str="select * from registration where Id='"+user_Id+"'";
    //console.log(str);
    con.query(str,function(error,result)
    {
       if(error) throw error;
       if(result.length>0)
        {
            //console.log(result);
            request.session.userName = result[0].User_name;
            request.session.email = result[0].Email;
            request.session.Phoneno = result[0].Phone_no;
            request.session.State = result[0].State;
            request.session.City = result[0].City;
            request.session.Password = result[0].Password;

            const username= request.session.userName;
            const email= request.session.email;
            const Phone_no= request.session.Phoneno;
            const State= request.session.State;
            const Password= request.session.Password;
            const City= request.session.City;

            res.render('Profile',{UserId:user_Id,Users:username,Emails:email,Phone_nos:Phone_no,States:State,Citys:City,Passwords:Password,data:result});
            
        }     
    });
});

router.post('/update_profile',function(request,res,next){
    const user_Id=request.session.userId;
    var user_name=request.body.user_name;
    //console.log(user_name);
    var email=request.body.email;
    var ph_no=request.body.ph_no;
    var state=request.body.state;
    var city=request.body.city;
    var pwd=request.body.pwd;
    

    var str="update registration set User_name='"+user_name+"',Email='"+email+"',Phone_no='"+ph_no+"',State='"+state+"',City='"+city+"',Password='"+pwd+"' where Id='"+user_Id+"'";
    //console.log(str);
    con.query(str,function(error,result){
        if(error) throw error;
        if(result.length>0)
        {
           res.redirect('/Profile');
        }
    });
});
module.exports=router;
