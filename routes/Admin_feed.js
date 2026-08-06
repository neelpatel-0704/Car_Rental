var express = require('express');
var router = express.Router();
var fs = require("fs");
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "motorlux"
});

//Show data...
router.get('/', function (request, res, next) {
    var str = "select * from feed_back,registration,branch_tbl where feed_back.User_id=registration.Id and feed_back.Bran_id=branch_tbl.Branch_id";
    // var str="select * from feed_back";
    //console.log(str);
    con.query(str, function (error, result) {
        if (error) throw error;
        var str = "select * from branch_tbl";
        con.query(str, function (error, result2) {
            if (error) throw error;
            res.render('Admin_feed', { data: result, data1: result2, message: request.flash('success') });
        });
       
    });
});

//Search Data...
router.post('/Feed_Data', function (request, res, next) {
    var Bran_id = request.body.Bra_id;
    if (Bran_id != "") {
        var str = "select * from feed_back,registration,branch_tbl where feed_back.User_id=registration.Id and feed_back.Bran_id=branch_tbl.Branch_id and branch_tbl.Branch_id='" + Bran_id + "'";
        //console.log(str);
        con.query(str, function (error, result) {
            if (error) throw error;
           
                var str1 = "select * from branch_tbl";
                con.query(str1, function (error, result2) {
                    if (error) throw error;
                    res.render('Admin_feed', { data: result, data1: result2, message: request.flash('success') });
                });
        });
    }
    else {
        var str = "select * from feed_back,registration,branch_tbl where feed_back.User_id=registration.Id and feed_back.Bran_id=branch_tbl.Branch_id";
        // var str="select * from feed_back";
        //console.log(str);
        con.query(str, function (error, result) {
            if (error) throw error;
            if (result.length > 0) {
                var str1 = "select * from branch_tbl";
                con.query(str1, function (error, result2) {
                    if (error) throw error;
                    request.flash('success', 'Please Select Branch!');
                    res.render('Admin_feed', { data: result, data1: result2, message: request.flash('success') });
                });

            }
        });

    }


});
module.exports = router;