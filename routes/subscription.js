const express = require('express');
const router = express.Router();
const {
    createsub,
    createsubPaln,
    createCustomer,
    readCustomer,
} = require('../modules/subscription/subControllers.js');

router.post('/createsub', createsub);
router.post('/createsubplan', createsubPaln);
router.post('/createcustomer', createCustomer);
router.post('/readcustomer', readCustomer);

module.exports = router;
