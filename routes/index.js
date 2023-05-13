var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

const sub = require('./subscription');

router.use('/subscription', sub);

module.exports = router;
