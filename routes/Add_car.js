
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
    res.render('Add_car');
});

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../Images/')); // Ensure correct path to 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Retain original file name
    }
});

const upload = multer({ storage: storage });

// Middleware to parse URL-encoded data
router.use(express.urlencoded({ extended: false }));

// Route to handle file upload and record insertion
router.post('/Show_addcar', upload.single('car_image'), function (req, res, next) {
   // Extract data from the request
    
   var car_name = req.body.car_name;
   var car_price = req.body.car_price;
   var fuel_type = req.body.fuel_type;
   var contain = req.body.contain;
   var car_image = req.file ? req.file.filename : null; // Handle file upload
   
   // SQL query to insert data into the database
   // var query = "INSERT INTO e_book (NULL,car_image, car_name, car_price, fuel_type, contain) VALUES (?, ?, ?, ?, ?)";
   var query="insert into e_book values(Null,'"+car_image+"','"+car_name+"','"+car_price+"','"+fuel_type+"','"+contain+"')";
   //console.log(query);
   con.query(query, function (error, result) {
       if (error) {
           console.error(error);
           return next(error); // Pass errors to error-handling middleware
       }
       res.render('Add_car');
   });
});

// Error-handling middleware
router.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = router;
