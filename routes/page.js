var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('page/index', { title: 'Express' });
});

router.get('/form', function (req, res) {
    res.render('page/form', { title: 'Express' });
});


module.exports = router;