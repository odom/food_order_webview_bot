var express = require('express');
var request = require('request');
var router = express.Router();
var env = require('dotenv').config();
// /* GET user listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET user page. */
router.get('/', function(req, res, next) {
  var appId = process.env.APP_ID||'2325';
    console.log(appId);
  res.render('user/index', { title: 'Register Form', appId: appId });
});

router.post('/register', function(req, res, next) {
    //res.send("Hello World");
  //res.render('user/register', {title:"post", datas: req.params});
    var url = process.env.URL_POST;
    request.post(url + '/api/botpress-user-registration/user', {form:req.body},  function optionalCallback(err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('Upload successful!  Server responded with:', body);
    })
    res.render('user/register', {'title':" Success !"});
});

module.exports = router;
