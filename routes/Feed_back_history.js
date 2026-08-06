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
    var str="select * from feed_back,registration,branch_tbl where feed_back.User_id=registration.Id and feed_back.Bran_id=branch_tbl.Branch_id and registration.Id='"+user_Id+"' ORDER BY Feedback_id DESC";
    //console.log(str);
    con.query(str,function(error,result){
        if(error) throw error;
        var str = "select * from branch_tbl";
        con.query(str, function (error, result2) {
            if (error) throw error;
            res.render('Feed_back_history', { data: result, data1: result2, message: request.flash('success') });
        });
    });
});

//Delete Record..
router.get('/delete/:id', function (request, res, next) {
    var id = request.params.id;
    var str = "delete from feed_back where Feedback_id ='" + id + "'";
    con.query(str, function (err, result) {
        if (err) throw err;
        const user_Id=request.session.userId;
        var str="select * from feed_back,registration,branch_tbl where feed_back.User_id=registration.Id and feed_back.Bran_id=branch_tbl.Branch_id and registration.Id='"+user_Id+"'";
        //console.log(str);
        con.query(str,function(error,result){
            if(error) throw error;
            var str = "select * from branch_tbl";
            con.query(str, function (error, result2) {
                if (error) throw error;
                res.render('Feed_back_history', { data: result, data1: result2, message: request.flash('success') });
            });
        });
    });
});

//Update Recoed..
router.get('/edit/:id', function(request, response, next){
	var id = request.params.id;
    var str="select * from feed_back,registration,branch_tbl where feed_back.User_id=registration.Id and feed_back.Bran_id=branch_tbl.Branch_id and feed_back.Feedback_id ='"+id+"'";
	con.query(str, function(error, data){
        if(error) throw error;
        if(data)
        {
            request.session.userName = data[0].User_name;
            const username= request.session.userName;
            var str="select * from branch_tbl";
            con.query(str,function(error,result){
                if(error) throw error;
                if(result)
                {
                    response.render('Feed_back', {action:'edit',Users:username,sampleData:data[0],data:result});
                }
            });   
        }
	});
});

router.post('/edit/:id', function(request, response, next){
	var id = request.params.id;
    var Bran_id=request.body.Bra_id;
    var Car_name=request.body.car_name;
    var Grievance=request.body.review;
	var str="update feed_back set Bran_id='"+Bran_id+"',Car_name='"+Car_name+"',Grievance='"+Grievance+"' where Feedback_id ='"+id+"'";
    //console.log(str);
    con.query(str, function(error, data){
    if(error) throw error;
    if(data)
    {
        response.redirect('/Feed_back');
    }
	});
});



//Search Data...
router.post('/Feed_Data_c', function (request, res, next) {
    var Bran_id = request.body.Bra_id;
    if (Bran_id != "") {
        var str = "select * from feed_back,registration,branch_tbl where feed_back.User_id=registration.Id and feed_back.Bran_id=branch_tbl.Branch_id and branch_tbl.Branch_id='" + Bran_id + "'";
        //console.log(str);
        con.query(str, function (error, result) {
            if (error) throw error;
           
                var str1 = "select * from branch_tbl";
                con.query(str1, function (error, result2) {
                    if (error) throw error;
                    res.render('Feed_back_history', { data: result, data1: result2, message: request.flash('success') });
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
                    res.render('Feed_back_history', { data: result, data1: result2, message: request.flash('success') });
                });

            }
        });

    }


});
module.exports=router;
