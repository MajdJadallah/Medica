const express = require('express');
const router=express.Router();
const {getHospitals,phesylogy,nutrition} = require('../controllers/HospitalsControllers')



router.get('/',getHospitals)
router.get('/phesylogy',phesylogy)
router.get('/nutrition',nutrition)


module.exports = router;