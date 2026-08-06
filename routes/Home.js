var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/',function(req,res,next){
    res.render('Home');
});

router.get("/image1", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/Defender_1.jpg");
    streamReadFile.pipe(res);
});
router.get("/headerlogo", (req, res) => {
    const streamReadFile = fs.createReadStream("LOGO/logo4.png");
    streamReadFile.pipe(res);
});
router.get("/twitter", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/twitter_color.png");
    streamReadFile.pipe(res);
});
router.get("/facebook", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/facebook_color.png");
    streamReadFile.pipe(res);
});
router.get("/youtube", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/youtube_color.png");
    streamReadFile.pipe(res);
});
router.get("/instagram", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/instagram_color.png");
    streamReadFile.pipe(res);
});
router.get("/google", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/google.png");
    streamReadFile.pipe(res);
});
router.get("/image7", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/porsche.png");
    streamReadFile.pipe(res);
});
router.get("/image8", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/black_car.jpg");
    streamReadFile.pipe(res);
});
router.get("/image9", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/BMW_6.png");
    streamReadFile.pipe(res);
});

router.get("/logins", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/Mobile login-rafiki.png");
    streamReadFile.pipe(res);
});
router.get("/create-acc", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/Mobile login-rafiki.png");
    streamReadFile.pipe(res);
});
router.get("/forget-pass", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/Mobile login-rafiki.png");
    streamReadFile.pipe(res);
});

router.get("/image11", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/LC300.jpg");
    streamReadFile.pipe(res);
});
router.get("/home-img1", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/car1.jpg");
    streamReadFile.pipe(res);
});
router.get("/image13", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/engine.jpg");
    streamReadFile.pipe(res);
});
router.get("/image14", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/back_color.jpg");
    streamReadFile.pipe(res);
});
router.get("/image15", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/engine_2.jpg");
    streamReadFile.pipe(res);
});
router.get("/image16", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/calling.png");
    streamReadFile.pipe(res);
});
router.get("/image17", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/call.png");
    streamReadFile.pipe(res);
});
router.get("/image18", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/road_safety.png");
    streamReadFile.pipe(res);
});
router.get("/image19", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/mail.png");
    streamReadFile.pipe(res);
});
router.get("/image20", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/msg.png");
    streamReadFile.pipe(res);
});
router.get("/image21", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/drive.png");
    streamReadFile.pipe(res);
});
router.get("/image22", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/harrier.png");
    streamReadFile.pipe(res);
});
router.get("/image23", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/BMW_1.jpg");
    streamReadFile.pipe(res);
});
router.get("/image24", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/service.jpg");
    streamReadFile.pipe(res);
});
router.get("/image25", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/car-service_4833746.png");
    streamReadFile.pipe(res);
});
router.get("/image26", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/car-workshop_17072315.png");
    streamReadFile.pipe(res);
});
router.get("/image27", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/car_11108965.png");
    streamReadFile.pipe(res);
});
router.get("/image28", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/road_safety.png");
    streamReadFile.pipe(res);
});
router.get("/image29", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/maintenance_4929238.png");
    streamReadFile.pipe(res);
});
router.get("/image30", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/management-service_6747614.png");
    streamReadFile.pipe(res);
});
router.get("/image31", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/car-service_6966399.png");
    streamReadFile.pipe(res);
});
router.get("/image32", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/oil_11521458.png");
    streamReadFile.pipe(res);
});
// Workers Images...
router.get("/image33", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/engineer1.jpg");
    streamReadFile.pipe(res);
});
router.get("/image34", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/worker1.jpg");
    streamReadFile.pipe(res);
});
router.get("/image35", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/worker3.jpg");
    streamReadFile.pipe(res);
});
router.get("/image36", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/engineer2.jpg");
    streamReadFile.pipe(res);
});
// router.get("/admin-img", (req, res) => {
//     const streamReadFile = fs.createReadStream("Pic/Admin-bro.png");
//     streamReadFile.pipe(res);
// });
router.get("/image37", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/profile_2.jpg");
    streamReadFile.pipe(res);
});
router.get("/check", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/right.png");
    streamReadFile.pipe(res);
});
router.get("/pro_k", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/k.png");
    streamReadFile.pipe(res);
});
router.get("/image38", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/virtus.png");
    streamReadFile.pipe(res);
});
router.get("/img-malik", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/Carpool-rafiki.png");
    streamReadFile.pipe(res);
});
router.get("/e-book-img2", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/harrier.png");
    streamReadFile.pipe(res);
});
router.get("/e-book-img3", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/scorpio-n.png");
    streamReadFile.pipe(res);
});

router.get("/user", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/kush.jpg");
    streamReadFile.pipe(res);
});
router.get("/help1", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/help-img1.png");
    streamReadFile.pipe(res);
});
router.get("/help2", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/help-img2.png");
    streamReadFile.pipe(res);
});
router.get("/help3", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/help-img3.png");
    streamReadFile.pipe(res);
});
router.get("/help5", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/help-img5.png");
    streamReadFile.pipe(res);
});
router.get("/help6", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/help-img6.png");
    streamReadFile.pipe(res);
});
router.get("/help4", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/logo2.png");
    streamReadFile.pipe(res);
});
router.get("/sitemap1", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/site_map1.jpg");
    streamReadFile.pipe(res);
});
router.get("/sitemap2", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/site_map2.jpg");
    streamReadFile.pipe(res);
});
router.get("/sitemap3", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/site_map3.jpg");
    streamReadFile.pipe(res);
});
router.get("/profile5", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/profile5.png");
    streamReadFile.pipe(res);
});
router.get("/car1", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/520i.png");
    streamReadFile.pipe(res);
});
router.get("/car2", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/i20.png");
    streamReadFile.pipe(res);
});
router.get("/car3", (req, res) => {
    const streamReadFile = fs.createReadStream("Pic/car2.jpg");
    streamReadFile.pipe(res);
});


module.exports=router;
