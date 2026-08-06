var express = require('express');
var router = express.Router();
var fs = require("fs");
var mysql=require('mysql');
var multer=require('multer');
var path=require('path');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"motorlux"
});


router.get('/',function(req,res,next){
    var str="SELECT * FROM e_book ORDER BY Car_id DESC";
    con.query(str,function(err,result){
        if(err) throw err;
        if(result.length>0)
        {
            res.render("Admin_ebook",{data:result});
        }
   });
});
module.exports=router;
