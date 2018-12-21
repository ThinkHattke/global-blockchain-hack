var express=require('express');
var router=express.Router();
var mongoose              = require('mongoose');

var ngoContrl = require('../cntrl/ngo');
var reqContrl = require('../cntrl/req');


router.route('/rating/:name')
    .get(ngoContrl.getRating)


router.route('/ngo')
    .post(ngoContrl.addNgo)
    .get(ngoContrl.getNgos)

router.route('/accept')
    .post(ngoContrl.acceptRequest);

router.route('/request')
    .post(reqContrl.addRequest)
    .get(reqContrl.getRequests);


router.route('/request/:name')
    .get(reqContrl.getRequestOfNgo)


module.exports = router