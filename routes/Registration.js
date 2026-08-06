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

router.get('/',function(request,res,next){
    res.render('Registration', { message:request.flash('success')});
    // res.render('Registration');
});

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../Profile/')); // Ensure correct path to 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Retain original file name
    }
});

const upload = multer({ storage: storage });
// Middleware to parse URL-encoded data
router.use(express.urlencoded({ extended: false }));

router.get('/', function(req, res, next) {
    res.render('Registration');
});

router.post('/Show_regi',function (request, res, next) {
    // console.log(req.body);
    var user_name=request.body.user_name;
    var email=request.body.email;
    var ph_no=request.body.ph_no;
    var state=request.body.state;
    var city=request.body.city;
    var pwd=request.body.pwd;

    if(user_name != "" && email != "" && ph_no != "" && state != "" && city != "" && pwd != "" && ph_no.length == 10)
    {
        var str="insert into registration values(Null,'"+user_name+"','"+email+"','"+ph_no+"','"+state+"','"+city+"','"+pwd+"')";    
        //console.log(str);
        con.query(str,function(err,result){
            if(err) throw err;
            if(result.length>0)
            {
                request.render("Registration");
            }
        });
    }
    else {
        request.flash('success', 'Enter the Valid Phone No!');
        res.render('Registration', { message:request.flash('success')});
        // res.redirect('/Registration');
    }
});

router.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports=router;