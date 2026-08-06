const { error } = require('console');
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
    const user_Id=request.session.userId;
    if (!user_Id) {
        res.redirect('/Login');
    }
    var query="select * from registration where Id='"+user_Id+"'";
    //console.log(query);
    con.query(query, function (error,result) {
        if (error) throw error;
        if(result.length>0)
            {
                //console.log(result);
                request.session.userName = result[0].User_name;
                request.session.email = result[0].Email;
                request.session.Phoneno = result[0].Phone_no;
                request.session.State = result[0].State;
                request.session.City = result[0].City;
    
                const username= request.session.userName;
                const email= request.session.email;
                const Phone_no= request.session.Phoneno;
                const State= request.session.State;
                const City= request.session.City;

                var str="select * from branch_tbl";
                con.query(str,function(error,result2){
                    if(error) throw error;
                    if(result2.length>0)
                    {
                        res.render('Feed_back',{action:'add',Users:username,Emails:email,Phone_nos:Phone_no,States:State,Citys:City,data:result2});
                    }
                });
                // res.render('Service',{Users:username,Emails:email,Phone_nos:Phone_no,States:State,Citys:City});
            }    
    });
});

router.post('/Show_feed',function(request,res,next){
    const user_Id=request.session.userId;
    var Bran_id=request.body.Bra_id;
    var Car_name=request.body.car_name;
    var Grievance=request.body.review;

    var str="insert into feed_back values(NULL,'"+user_Id+"','"+Bran_id+"','"+Car_name+"','"+Grievance+"')";
    con.query(str,function(error,data){
        if(error) throw error;
        if(data.length>0)
        {
          res.redirect('/Feed_back');
        }
    });
});
//logout...
router.get('/Logout', function(req, res, next) {
    req.session.destroy(function(err){
      if(err) throw err;
      res.render("Home");
    });
});
module.exports=router;